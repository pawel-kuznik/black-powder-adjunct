import { FormFieldLayout } from "../FormFieldLayout";
import { SpecialsInput } from "../SpecialsInput";

export interface SpecialsFieldProps {

    label: string;
    name: string;
    defaultValue?: string | string[];
};

export function SpecialsField({ label, name, defaultValue } : SpecialsFieldProps) {

    return (
        <FormFieldLayout label={label}>
            <SpecialsInput name={name} defaultValue={defaultValue}/>
        </FormFieldLayout>
    );
};