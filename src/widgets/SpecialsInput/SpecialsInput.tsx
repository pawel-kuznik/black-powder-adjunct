import { useState } from "react";
import { SelectInput } from "../SelectInput";
import { SpecialType, specialTypes } from "../../data/special";
import { SpecialTag } from "./SpecialTag";

export interface SpecialsInputProps {
    name: string;
    defaultValue?: string | string[];
};

export function SpecialsInput({ name, defaultValue }: SpecialsInputProps) {

    const [ value, setValue ] = useState<string>(() => {
        if (Array.isArray(defaultValue)) return defaultValue.join(",");
        if (defaultValue) return defaultValue;
        return "";
    });
    const [ adding, setAdding ] = useState<boolean>(false);

    const handleOnChange = (newValue: string) => {

        if (newValue === "---") return;

        const specials = value.split(',');
        if (specials.includes(newValue)) return;

        specials.push(newValue);
        specials.sort((a, b) => a.localeCompare(b));

        setValue(specials.filter(a => a !== '').join(","));
        setAdding(false);
    };

    const handleAddClick = () => {
        setAdding(true);
    };

    const handleOnRemove = (special: string) => {

        const specials = value.split(',');
        if (!specials.includes(special)) return;

        setValue(specials.filter(a => a !== special).join(","));
    };

    const specials = value.split(',');

    return (
        <div>
            <input type="hidden" name={name} value={value}/>
            {specials.map(s => <SpecialTag key={s} special={s as SpecialType} onRemove={handleOnRemove}/>)}
            {adding && (<SelectInput options={[ "---", ...specialTypes]} labels={(o: string) => o} onChange={handleOnChange}/>)}
            {!adding && (<button onClick={handleAddClick}>Add</button>)}
        </div>
    );
};
