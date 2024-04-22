import { UnitDescriptor } from "../data/units";

/**
 *  Check if given unit is infantry.
 */
export function isUnitInfantry(unit: UnitDescriptor) {
    return unit.type.includes("infantry");
}