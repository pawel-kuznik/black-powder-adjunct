import { FormFieldLayout } from "../FormFieldLayout";

import "./JSONField.css";

export interface JSONFieldProps {

    label: string;
    name?: string;
    defaultValue?: string;
};

export function JSONField({ label, name, defaultValue = "" } : JSONFieldProps) {

    return (
        <FormFieldLayout label={label}>
            <textarea name={name} className="jsonfield" rows={20} defaultValue={defaultValue}></textarea>
        </FormFieldLayout>
    );
};
