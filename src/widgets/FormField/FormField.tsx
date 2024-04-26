import { ChangeEvent } from "react";
import { SelectInput } from "../SelectInput";
import { FormFieldLayout } from "../FormFieldLayout";

export interface FormFieldProps {
    layout?: "inline" | "column";
    label: string;
    name: string;
    list?: string;
    type?: "number" | "text" | "select";
    options?: string[] | readonly string[];
    labels?: string[] | ((option: string) => string);
    min?: number | string;
    max?: number | string;
    defaultValue?: string | number;
    onChange?: (value: string) => void;
};

export function FormField({ layout = "column", label, name, type, min, max, list, options, labels, defaultValue, onChange }: FormFieldProps) {

    const inputArgs: any = {
        type,
        name,
        min,
        max,
        list,
        options,
        labels
    };

    if (defaultValue !== undefined) inputArgs.defaultValue = defaultValue;

    if (type === "select") inputArgs.onChange = onChange;

    else inputArgs.onChange = (event: ChangeEvent) => {

        onChange?.((event.target as HTMLInputElement).value);
    }

    const css = [ 'formfield' ];
    css.push(`formfield-layout-${layout}`);

    return (
        <FormFieldLayout label={label} layout={layout}>
            {type === "select" ? <SelectInput {...inputArgs} /> : <input {...inputArgs}/>}
        </FormFieldLayout>
    );
};
