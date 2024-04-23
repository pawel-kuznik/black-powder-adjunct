import { useState } from "react";
import { calcUnitCost, prepareUnitData } from "../../logic";
import { BasicForm } from "../BasicForm";
import { FormField } from "../FormField";
import { WeaponType, weaponsTypes } from "../../data/weapons";
import { UnitDescriptor, unitTypes } from "../../data/units";
import { StatsColumns } from "../StatsColumns";
import { ShootingField } from "../ShootingField";
import { useUnitDescriptorsStore } from "../../state";
import { SpecialsField } from "../SpecialsField";
import { WrittenField } from "../WrittenField";

import "./UnitEditor.css";

export interface UnitEditorProps {

    model?: UnitDescriptor;
};

export function UnitEditor({ model } : UnitEditorProps) {

    const [ weapon, setWeapon ] = useState<WeaponType>("pistols");
    const [ points, setPoints ] = useState<number>(model ? calcUnitCost(model) : 0);
    const unitDescriptorStore = useUnitDescriptorsStore();

    const handleSubmit = (data: object) => {
        unitDescriptorStore.store(prepareUnitData(data));
    };

    const handleChange = (data: object) => {

        const unitData = prepareUnitData(data);
        setPoints(calcUnitCost(unitData));
    };

    const handleWeaponChange = (value: string) => {
        setWeapon(value as WeaponType);
    };

    const affiliations = [...new Set(Object.values(unitDescriptorStore.descriptors).map(u => u.affiliation).filter(s => String(s)))];

    return (
        <BasicForm onChange={handleChange} onSubmit={handleSubmit}>
            <datalist id="uniteditor-affiliation-suggestions">
                {affiliations.map(a => (<option key={a} value={a}/>))}
            </datalist>
            <div className="uniteditor-firstline">
                <WrittenField name="key" placeholder="Unit name..." defaultValue={model?.key}/>
                <WrittenField name="affiliation" placeholder="Affiliated by..." list="uniteditor-affiliation-suggestions" defaultValue={model?.affiliation}/>
                <span>{points} points</span>
                <button>Save</button>
            </div>
            <StatsColumns>
                <FormField label="Type" type="select" name="type" options={unitTypes} labels={(o: string) => o} defaultValue={model?.type}/>
                <FormField label="Arnament" type="select" name="arnament" options={weaponsTypes} labels={(o: string) => o} onChange={handleWeaponChange} defaultValue={model?.arnament}/>
                <FormField label="Hand to hand" name="handToHand" type="number" min="1" defaultValue={model?.handToHand}/>
                <ShootingField label="Shooting" name="shooting" weapon={weapon} defaultValue={model?.shooting}/>
                <FormField label="Morale" name="morale" type="number" min="1" defaultValue={model?.morale}/>
                <FormField label="Stamina" name="stamina" type="number" min="1" defaultValue={model?.stamina}/>
            </StatsColumns>
            <SpecialsField label="Specials" name="special" defaultValue={model?.special} />
        </BasicForm>
    );
};