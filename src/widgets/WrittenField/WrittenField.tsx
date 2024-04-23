import "./WrittenField.css";

export interface WrittenFieldProps {
    name: string;
    list?: string;
    defaultValue?: string;
    placeholder?: string;
};

export function WrittenField({ name, placeholder, list, defaultValue } : WrittenFieldProps) {

    return (
        <input
            className="writtenfield"
            type="text"
            list={list}
            name={name}
            placeholder={placeholder}
            defaultValue={defaultValue}
        />
    );
};
