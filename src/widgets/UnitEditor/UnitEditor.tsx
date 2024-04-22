import { useState } from "react";
import { calcUnitCost, prepareUnitData } from "../../logic";
import { BasicForm } from "../BasicForm";
import { FormField } from "../FormField";
import { WeaponType, weaponsTypes } from "../../data/weapons";
import { unitTypes } from "../../data/units";
import { StatsColumns } from "../StatsColumns";
import { ShootingField } from "../ShootingField";
import { useUnitDescriptorsStore } from "../../state";
import { SpecialsField } from "../SpecialsField";

export function UnitEditor() {

    const [ weapon, setWeapon ] = useState<WeaponType>("pistol");
    const [ points, setPoints ] = useState<number>(0);
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

    return (
        <BasicForm onChange={handleChange} onSubmit={handleSubmit}>
            <input type="text" name="key"/>
            <button>Save</button>
            <span>Points: {points}</span>
            <input type="text" name="affiliation"/>
            <StatsColumns>
                <FormField label="Type" type="select" name="type" options={unitTypes} labels={(o: string) => o}/>
                <FormField label="Arnament" type="select" name="arnament" options={weaponsTypes} labels={(o: string) => o} onChange={handleWeaponChange}/>
                <FormField label="Hand to hand" name="handToHand" type="number" min="1" defaultValue="1"/>
                <ShootingField label="Shooting" name="shooting" weapon={weapon}/>
                <FormField label="Morale" name="morale" type="number" min="1" defaultValue="1"/>
                <FormField label="Stamina" name="stamina" type="number" min="1" defaultValue="1"/>
            </StatsColumns>
            <SpecialsField label="Specials" name="special" />
        </BasicForm>
    );
};