import { useState } from "react";
import { calcUnitCost, prepareUnitData } from "../../logic";
import { BasicForm } from "../BasicForm";
import { FormField } from "../FormField";
import { WeaponType, weaponsTypes } from "../../data/weapons";
import { UnitDescriptor, unitTypes } from "../../data/units";
import { StatsColumns } from "../StatsColumns";
import { ShootingField } from "../ShootingField";
import { SpecialsField } from "../SpecialsField";
import { WrittenField } from "../WrittenField";

import "./UnitEditor.css";
import { useUnitDescriptorsStore } from "../../state";
import { useTranslation } from "react-i18next";

export interface UnitEditorProps {

    unit?: UnitDescriptor;
    onSubmit?: (unit: UnitDescriptor) => void;
    onCancel?: () => void;
};

export function UnitEditor({ unit, onSubmit, onCancel } : UnitEditorProps) {

    const { t } = useTranslation();

    const [ weapon, setWeapon ] = useState<WeaponType>("pistols");
    const [ points, setPoints ] = useState<number>(unit ? calcUnitCost(unit) : 0);
    const unitDescriptorStore = useUnitDescriptorsStore();

    const handleSubmit = (data: object) => {

        onSubmit?.(prepareUnitData(data));
    };

    const handleChange = (data: object) => {

        const unitData = prepareUnitData(data);
        setPoints(calcUnitCost(unitData));
    };

    const handleWeaponChange = (value: string) => {
        setWeapon(value as WeaponType);
    };

    const handleCancel = () => {
        onCancel?.();
    };

    const affiliations = [...new Set(Object.values(unitDescriptorStore.descriptors).map(u => u.affiliation).filter(s => String(s)))];

    return (
        <BasicForm onChange={handleChange} onSubmit={handleSubmit}>
            <datalist id="uniteditor-affiliation-suggestions">
                {affiliations.map(a => (<option key={a} value={a}/>))}
            </datalist>
            <div className="uniteditor-firstline">
                <WrittenField name="key" placeholder="Unit name..." defaultValue={unit?.key}/>
                <WrittenField name="affiliation" placeholder="Affiliated by..." list="uniteditor-affiliation-suggestions" defaultValue={unit?.affiliation}/>
                <span>{points} points</span>
                {onCancel && <button type="button" onClick={handleCancel}>Cancel</button>}
                <button>Save</button>
            </div>
            <StatsColumns>
                <FormField label={t("uniteditor.label.type")} type="select" name="type" options={unitTypes} labels={(o: string) => t(`unit-type.label.${o}`)} defaultValue={unit?.type}/>
                <FormField label={t("uniteditor.label.arnament")} type="select" name="arnament" options={weaponsTypes} labels={(o: string) => t(`weapon.label.${o}`)} onChange={handleWeaponChange} defaultValue={unit?.arnament}/>
                <FormField label={t("uniteditor.label.hand-to-hand")} name="handToHand" type="number" min="1" defaultValue={unit?.handToHand}/>
                <ShootingField label={t("uniteditor.label.shooting")} name="shooting" weapon={weapon} defaultValue={unit?.shooting}/>
                <FormField label={t("uniteditor.label.morale")} name="morale" type="number" min="1" defaultValue={unit?.morale}/>
                <FormField label={t("uniteditor.label.stamina")} name="stamina" type="number" min="1" defaultValue={unit?.stamina}/>
            </StatsColumns>
            <SpecialsField label={t("uniteditor.label.special")} name="special" defaultValue={unit?.special} />
        </BasicForm>
    );
};