import { FormFieldLayout } from "../FormFieldLayout";
import { SpecialsInput } from "../SpecialsInput";

export interface SpecialsFieldProps {

    /**
     *  The label to show on top of the input.
     */
    label: string;

    /**
     *  The name of the input.
     */
    name: string;

    /**
     *  Should the input display a list of all assigned special traits or an
     *  inline comma separated text?
     */
    layout?: "list" | "inline";

    /**
     *  The default value for the input. It can be either a comma separated values
     *  with all special traits or an array of special traits. The component will
     *  parse them internally into a string when submitting the form. 
     */
    defaultValue?: string | string[];
};

export function SpecialsField({ label, name, layout, defaultValue } : SpecialsFieldProps) {

    return (
        <FormFieldLayout label={label}>
            <SpecialsInput name={name} layout={layout} defaultValue={defaultValue}/>
        </FormFieldLayout>
    );
};