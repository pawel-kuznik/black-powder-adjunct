import { ChangeEvent, MutableRefObject } from "react";
import "./WrittenField.css";

export interface WrittenFieldProps {

    /**
     *  The name of the input.
     */
    name: string;

    /**
     *  The HTML id to list of suggestions for the input.
     */
    list?: string;

    /**
     *  A reference to the input value.
     */
    valueRef?: MutableRefObject<string>;

    /**
     *  A callback to call when user changes value.
     */
    onChange?: (newValue: string) => void;

    /**
     *  The default value.
     */
    defaultValue?: string;

    /**
     *  The placeholder text.
     */
    placeholder?: string;
};

/**
 *  This is a special form field that renders with old-timey
 *  style. Aside of that it function similar to regular form
 *  field.
 */
export function WrittenField({ name, placeholder, list, valueRef, onChange, defaultValue } : WrittenFieldProps) {

    const handleChange = (event: ChangeEvent) => {

        const newValue = String((event.target as HTMLInputElement).value);

        if (valueRef) valueRef.current = newValue;
        onChange?.(newValue)
    };

    return (
        <input
            className="writtenfield"
            type="text"
            list={list}
            name={name}
            onChange={handleChange}
            placeholder={placeholder}
            defaultValue={defaultValue || (valueRef ? valueRef.current : '')}
        />
    );
};
