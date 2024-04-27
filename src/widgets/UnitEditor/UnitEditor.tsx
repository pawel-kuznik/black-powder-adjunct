import { useReducer, useState } from "react";
import { calcUnitCost, formatDistance, isUnitArtilery, isWeaponArtillery, isWeaponMelee, isWeaponRanged, prepareUnitData } from "../../logic";
import { BasicForm } from "../BasicForm";
import { FormField } from "../FormField";
import { WeaponType, weaponsRange, weaponsTypes } from "../../data/weapons";
import { UnitDescriptor, unitMovement, unitTypes } from "../../data/units";
import { ShootingField } from "../ShootingField";
import { SpecialsField } from "../SpecialsField";
import { WrittenField } from "../WrittenField";
import { useTranslation } from "react-i18next";
import { useAffiliations } from "../../state/useAffiliations";
import { PointsBadge } from "../PointsBadge";

import "./UnitEditor.css";

export interface UnitEditorProps {

    unit?: UnitDescriptor;
    onSubmit?: (unit: UnitDescriptor) => void;
    onCancel?: () => void;
};

function composeUnit(state: UnitDescriptor, action: Partial<UnitDescriptor>) : UnitDescriptor {
    return prepareUnitData({ ...state, ...action });
}

export function UnitEditor({ unit, onSubmit, onCancel } : UnitEditorProps) {

    const { t } = useTranslation();
    const affiliations = useAffiliations();

    const [ weapon, setWeapon ] = useState<WeaponType>("pistols");
    const [ currentUnit, changeUnit ] = useReducer(composeUnit, { }, () => unit || prepareUnitData({ })); 

    const handleSubmit = (data: object) => {

        onSubmit?.(prepareUnitData(data));
    };

    const handleChange = (data: object) => {

        changeUnit(data);
    };

    const handleWeaponChange = (value: string) => {
        setWeapon(value as WeaponType);
    };

    const handleCancel = () => {
        onCancel?.();
    };

    const typeDescription = (() => {

        return t(`uniteditor.type.${currentUnit.type}.description`, { distance: formatDistance(unitMovement[currentUnit.type])});
    })();

    const arnamentDescription = (() => {
        if (isWeaponArtillery(currentUnit.arnament)) return t("uniteditor.arnament.artillery.description", { distance: formatDistance(weaponsRange[currentUnit.arnament as keyof typeof weaponsRange]) });
        if (isWeaponRanged(currentUnit.arnament)) return t("uniteditor.arnament.shooting.description", { distance: formatDistance(weaponsRange[currentUnit.arnament as keyof typeof weaponsRange]) });
        return t("uniteditor.arnament.melee.description");
    })();

    return (
        <BasicForm onChange={handleChange} onSubmit={handleSubmit}>
            <datalist id="uniteditor-affiliation-suggestions">
                {affiliations.map(a => (<option key={a} value={a}/>))}
            </datalist>
            <div className="uniteditor-firstline">
                <WrittenField
                    name="name"
                    placeholder={String(t("uniteditor.name.placeholder"))}
                    defaultValue={currentUnit?.name}
                />
                <PointsBadge points={calcUnitCost(currentUnit)} layout="column"/> 
                {onCancel && <button type="button" onClick={handleCancel}>{t("uniteditor.cancel.label")}</button>}
                {onSubmit && <button>{t("uniteditor.save.label")}</button>}
            </div>
            <div className="uniteditor-secondline">
                <FormField
                    label={t("uniteditor.affiliation.label")}
                    type="text"
                    name="affiliation"
                    list="uniteditor-affiliation-suggestions"
                    defaultValue={currentUnit?.affiliation}
                />
                <FormField
                    label={t("uniteditor.type.label")}
                    type="select"
                    name="type"
                    options={unitTypes}
                    labels={(o: string) => t(`unit-type.label.${o}`)}
                    defaultValue={currentUnit?.type}
                    description={typeDescription}
                />
                <FormField
                    label={t("uniteditor.arnament.label")}
                    type="select"
                    name="arnament"
                    options={weaponsTypes}
                    labels={(o: string) => t(`weapon.label.${o}`)}
                    onChange={handleWeaponChange}
                    defaultValue={currentUnit?.arnament}
                    description={arnamentDescription}
                />
            </div>
            <div className="uniteditor-thirdline">
                <FormField
                    label={t("uniteditor.hand-to-hand.label")}
                    name="handToHand"
                    type="number"
                    min="1"
                    defaultValue={currentUnit?.handToHand}
                />
                <ShootingField
                    label={t("uniteditor.shooting.label")}
                    name="shooting"
                    weapon={weapon}
                    defaultValue={currentUnit?.shooting}
                />
                <FormField
                    label={t("uniteditor.morale.label")}
                    name="morale"
                    type="number"
                    min="1"
                    defaultValue={currentUnit?.morale}
                />
                <FormField
                    label={t("uniteditor.stamina.label")}
                    name="stamina"
                    type="number"
                    min="1"
                    defaultValue={currentUnit?.stamina}
                />
            </div>
            <div className="uniteditor-fourthline">
                <SpecialsField label={t("uniteditor.special.label")} name="special" defaultValue={currentUnit?.special} />
            </div>
        </BasicForm>
    );
};