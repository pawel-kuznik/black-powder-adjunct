import { WeaponType } from "../../data/weapons";
import { isWeaponArtillery, isWeaponMelee } from "../../logic";

export interface ShootingInputProps {

    weapon: WeaponType;
    name: string;
    defaultValue?: string | number;
};

export function ShootingInput({ weapon, name, defaultValue }: ShootingInputProps) {

    const isMelee = isWeaponMelee(weapon);

    if (isMelee) return (
        <input readOnly disabled type="text" name={name} defaultValue="---"/>
    );

    const isArtillery = isWeaponArtillery(weapon);

    if (isArtillery) return (
        <input readOnly disabled type="text" name={name} defaultValue="3-2-1"/>
    );

    return (
        <input name={name} type="number" defaultValue={defaultValue}/>
    );
};