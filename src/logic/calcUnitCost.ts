import { UnitDescriptor } from "../data/units";
import { calcArtilleryCost } from "./calcArtilleryCost";
import { calcCavalryCost } from "./calcCavalryCost";
import { calcInfantryCost } from "./calcInfantryCost";
import { isUnitArtilery } from "./isUnitArtillery";
import { isUnitCavalry } from "./isUnitCavalry";
import { isUnitInfantry } from "./isUnitInfantry";

/**
 *  Calculate cost of a unit. This function will take into account
 *  all aspects of the unit and return a definitive points cost
 *  of the unit.
 */
export function calcUnitCost(unit: UnitDescriptor) : number {

    if (isUnitInfantry(unit)) return calcInfantryCost(unit);
    if (isUnitCavalry(unit)) return calcCavalryCost(unit);
    if (isUnitArtilery(unit)) return calcArtilleryCost(unit);

    return 0;
};