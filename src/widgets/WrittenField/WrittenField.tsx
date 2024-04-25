import { ChangeEvent, MutableRefObject } from "react";
import "./WrittenField.css";

export interface WrittenFieldProps {
    name: string;
    list?: string;
    valueRef?: MutableRefObject<string>;
    onChange?: (newValue: string) => void;
    defaultValue?: string;
    placeholder?: string;
};

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
