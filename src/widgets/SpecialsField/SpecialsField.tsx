import { FormFieldLayout } from "../FormFieldLayout";
import { SpecialsInput } from "../SpecialsInput";

export interface SpecialsFieldProps {

    label: string;
    name: string;
};

export function SpecialsField({ label, name } : SpecialsFieldProps) {

    return (
        <FormFieldLayout label={label}>
            <SpecialsInput name={name}/>
        </FormFieldLayout>
    );
};