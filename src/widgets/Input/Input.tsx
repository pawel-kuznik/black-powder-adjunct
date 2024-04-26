import { ChangeEvent, MutableRefObject } from "react";

export interface InputProps {
    
    /**
     *  The name of the input.
     */
    name: string;

    /**
     *  The HTML id of a list of suggestions for text/number fields.
     */
    list?: string;

    /**
     *  Type of the input.
     */
    type?: "number" | "text" ;

    /**
     *  The minimal value. It makes only sense for "number" inputs.
     */
    min?: number | string;

    /**
     *  The maximal value. It makes only sense for "number" inputs.
     */
    max?: number | string;

    /**
     *  The default value of the input.
     */
    defaultValue?: string | number;

    /** 
     *  A mutable ref to the input value.
     */
    valueRef?: MutableRefObject<string>;

    /**
     *  A callback to call when user changed the value. 
     */
    onChange?: (value: string) => void;
};

export function Input({ name, list, type, min, max, defaultValue, valueRef, onChange } : InputProps) {

    const handleChange = (event: ChangeEvent) => {

        const value = (event.target as HTMLInputElement).value;

        if (valueRef) valueRef.current = value;
        onChange?.(value);
    }

    return (
        <input
            type={type}
            name={name}
            min={min}
            max={max}
            list={list}
            defaultValue={defaultValue || valueRef?.current}
            onChange={handleChange}
        />
    );
}
