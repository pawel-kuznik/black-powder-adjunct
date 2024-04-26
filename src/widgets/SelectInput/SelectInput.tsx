import { ChangeEvent, MutableRefObject, useRef } from "react";

export interface SelectInputProps {

    /**
     *  The name of the input
     */
    name?: string;

    /**
     *  The options/values of the select 
     */
    options: string[] | readonly string[];

    /**
     *  The labels of the select. The parameter can be a function that
     *  translates a value into a label.
     */
    labels: string[] | readonly string[] | ((option: string) => string);

    /**
     *  The titles/tooltips of the options. The parameter can be also a
     *  function that translates a value into a title/tooltip.
     */
    titles?: string[] | readonly string[] | ((option: string) => string);

    /**
     *  The default value of the input.
     */
    defaultValue?: string;

    /**
     *  A mutable reference to the value.
     */
    valueRef?: MutableRefObject<string>;

    /**
     *  A callback called when user changes the value of the input.
     */
    onChange?: (value: string) => void;
};

export function SelectInput({ name, options, labels, titles, onChange, defaultValue, valueRef }: SelectInputProps) {

    const inputRef = useRef<HTMLSelectElement|null>(null);

    const handleChange = (event: ChangeEvent) => {

        const value = (event.target as HTMLSelectElement).value
        if (valueRef) valueRef.current = value; 
        onChange?.(value);
    };

    const generateTitle = (o: string, k: number) => {

        if (titles === undefined) return undefined;

        return typeof (titles) === "function" ? titles(o) : titles[k]; 
    };

    const title = (() => {

        if (!titles) return undefined;
        if (inputRef.current) return generateTitle(inputRef.current.value, options.findIndex(o => o === inputRef.current?.value));
        if (defaultValue !== undefined) return generateTitle(defaultValue, options.findIndex(o => o === defaultValue));
        return undefined;
    })();
    
    return (
        <select ref={inputRef} onChange={handleChange} name={name} defaultValue={defaultValue || valueRef?.current} title={title}>
            {options.map((o, k) => {

                const label = typeof (labels) === "function" ? labels(o) : labels[k];
                return (<option key={o} value={o} title={generateTitle(o, k)}>{label}</option>)
            })}
        </select>
    );
};