import { WeaponType } from "../../data/weapons";
import { FormFieldLayout } from "../FormFieldLayout";
import { ShootingInput } from "../ShootingInput/ShootingInput";

export interface ShootingFieldProps {
    label: string;
    name: string;
    weapon: WeaponType;
    defaultValue?: string | number;
};

export function ShootingField({ label, name, weapon, defaultValue } : ShootingFieldProps) {
    return (
        <FormFieldLayout label={label}>
            <ShootingInput name={name} weapon={weapon} defaultValue={defaultValue}/>
        </FormFieldLayout>
    );
};