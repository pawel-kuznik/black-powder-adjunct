import { v4 as uuid } from "uuid";
import { SpecialType, specialTypes } from "../data/special";
import { ShotingType, UnitDescriptor, UnitType, baseUnit, unitTypes } from "../data/units";
import { WeaponType, weaponsTypes } from "../data/weapons";

function prepareNumber(input: any, fallback: number) : number {

    const value = Number(input);
    return Number.isNaN(value) ? fallback : value;
}

function prepareArmament(input:any, fallback: WeaponType) : WeaponType {

    if (weaponsTypes.includes(input)) return input;
    return fallback;
}

function prepareType(input: any, fallback: UnitType) : UnitType {
    
    if (unitTypes.includes(input)) return input;
    return fallback;
}

function prepareShooting(input: any, fallback: ShotingType) : ShotingType {
    
    if (input === "artillery" || input === "3-2-1") return "artillery";
    if (input === "melee" || input === "---") return "melee";

    const value = Number(input);
    return Number.isNaN(value) ? fallback : value;
}

function prepareSpecial(input: any, fallback: SpecialType[]) : SpecialType[] {
    
    if (typeof(input) === "string") return prepareSpecial(input.split(','), fallback);
    if (!Array.isArray(input)) return fallback;

    const filtered = input.filter(v => specialTypes.includes(v));

    return filtered;
}

function prepareAffiliation(input: any, fallback: string | undefined) : string | undefined {

    if (input === undefined || typeof(input) === "string") return input;
    return fallback;
}

/**
 *  This is a function that prepare unit data based on some input. The input
 *  can be any kind of object. When specific properties (key, handToHand, morale,
 *  stamina, shooting, armament, type, and special) are found in the object, 
 *  the function will attempt to parse it and assign values to a new descriptor.
 *  If an expected value can't be found in the input, the functin will fallback
 *  on the passed fallback unit. 
 */
export function prepareUnitData(input: object, fallback: UnitDescriptor = { ...baseUnit }) : UnitDescriptor {

    const unit = { ...baseUnit };

    if ('id' in input) unit.id = String(input.id);
    else unit.id = uuid();

    if ('name' in input) unit.name = String(input.name);

    if ('handToHand' in input) unit.handToHand = prepareNumber(input.handToHand, fallback.handToHand);
    if ('morale' in input) unit.morale = prepareNumber(input.morale, fallback.morale);
    if ('stamina' in input) unit.stamina = prepareNumber(input.stamina, fallback.stamina);
    if ('shooting' in input) unit.shooting = prepareShooting(input.shooting, fallback.shooting);

    if ('armament' in input) unit.armament = prepareArmament(input.armament, fallback.armament);
    if ('type' in input) unit.type = prepareType(input.type, unit.type);

    if ('special' in input) unit.special = prepareSpecial(input.special, unit.special);

    if ('affiliation' in input) unit.affiliation = prepareAffiliation(input.affiliation, unit.affiliation);

    return unit;
};
