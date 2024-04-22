import { UnitDescriptor } from "../data/units";

/**
 *  Check if given unit is cavalry.
 */
export function isUnitCavalry(unit: UnitDescriptor) {
    return unit.type.includes("cavalry");
}