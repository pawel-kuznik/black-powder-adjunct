import { UnitDescriptor } from "../data/units";

/**
 *  Check if given unit is artillery.
 */
export function isUnitArtilery(unit: UnitDescriptor) {
    return unit.type.includes("artillery");
}