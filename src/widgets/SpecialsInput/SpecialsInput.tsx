import { useState } from "react";
import { SelectInput } from "../SelectInput";
import { SpecialType, specialTypes } from "../../data/special";
import { SpecialTags } from "../SpecialTags";
import { useTranslation } from "react-i18next";

export interface SpecialsInputProps {

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

/**
 *  This is a widget that allows for management of a collection of special traits
 *  of a unit in as one input.
 * 
 *  When the list of special traits is modified, it can be detected as a DOM "change"
 *  event. Useful for when looking for changes inside a form.
 */
export function SpecialsInput({ name, layout, defaultValue }: SpecialsInputProps) {

    const { t } = useTranslation();

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

    const specials = value.split(',').filter(a => a) as SpecialType[];

    // we sort the special types after they are translated so that it's
    // in alphabetical order regardless of the language.
    const sortedSpecialTypes = [...specialTypes].sort((a, b) => String(t(`special.label.${a}`)).localeCompare(String(t(`special.label.${b}`))));

    const translateLabel = (o: string) => o === "---" ? '---' : t(`special.label.${o}`);
    const translateDescription = (o: string) => o === "---" ? '' : t(`special.description.${o}`);

    return (
        <div>
            <input type="hidden" name={name} value={value}/>
            <SpecialTags layout={layout} specials={specials} onClick={handleOnRemove}/>
            {adding && (<SelectInput options={[ "---", ...sortedSpecialTypes]} labels={translateLabel} titles={translateDescription} onChange={handleOnChange}/>)}
            {!adding && (<button onClick={handleAddClick}>{t("specialsinput.add")}</button>)}
        </div>
    );
};
