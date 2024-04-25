import { ChangeEvent } from "react";

export interface SelectInputProps {
    name?: string;
    options: string[] | readonly string[];
    labels: string[] | readonly string[] | ((option: string) => string);
    titles?: string[] | readonly string[] | ((option: string) => string);
    onChange?: (value: string) => void;
    defaultValue?: string;
};

export function SelectInput({ name, options, labels, titles, onChange, defaultValue }: SelectInputProps) {

    const handleChange = (event: ChangeEvent) => {

        onChange?.((event.target as HTMLSelectElement).value);
    };

    const generateTitle = (o: string, k: number) => {

        if (titles === undefined) return undefined;

        if (typeof (titles) === "function") return titles(o);
        
        return titles[k];
    };
    
    return (
        <select onChange={handleChange} name={name} defaultValue={defaultValue}>
            {options.map((o, k) => {

                const label = typeof (labels) === "function" ? labels(o) : labels[k];
                return (<option key={o} value={o} title={generateTitle(o, k)}>{label}</option>)
            })}
        </select>
    );
};