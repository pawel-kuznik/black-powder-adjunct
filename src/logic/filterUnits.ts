import { UnitDescriptor } from "../data/units";
import i18n from "../i18n";

export function filterUnits(input: UnitDescriptor[], keyword: string) : UnitDescriptor[] {

    const sanitizedKeyword = keyword.toLocaleLowerCase().trim();

    if (sanitizedKeyword.length === 0) return input;

    return input.filter(value => {

        if (value.name.toLocaleLowerCase().includes(sanitizedKeyword)) return true;

        if (value.affiliation?.toLocaleLowerCase().includes(sanitizedKeyword)) return true;

        if (i18n.t(`unit-type.label.${value.type}`).toLocaleLowerCase().includes(sanitizedKeyword)) return true;

        if (i18n.t(`weapon.label.${value.armament}`).toLocaleLowerCase().includes(sanitizedKeyword)) return true;

        if (value.special.reduce((current: boolean, prev: string) => {
            return current || i18n.t(`special.label.${prev}`).includes(sanitizedKeyword);
        }, false)) return true;

        return false;
    });
};