import { SpecialType } from "../data/special";
import { UnitDescriptor } from "../data/units";
import { calcSpecialCost } from "./calcSpecialCost";

/**
 *  This function calculates a cost of a collection of special traits for
 *  a given unit.
 */
export function calcSpecialsCost(specials: SpecialType[], unit: UnitDescriptor) {
    
    return specials.reduce((total: number, special: SpecialType) => {
        return total + calcSpecialCost(special, unit);
    }, 0);   
}