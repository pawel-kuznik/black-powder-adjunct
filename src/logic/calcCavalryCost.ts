import { UnitDescriptor } from "../data/units";
import { calcCavalryHandToHandCost } from "./calcCavalryHandToHandCost";
import { calcCavalryMoraleCost } from "./calcCavalryMoraleCost";
import { calcCavalryStaminaCost } from "./calcCavalryStaminaCost";
import { calcCavalryWeaponCost } from "./calcCavalryWeaponCost";
import { calcSpecialsCost } from "./calcSpecialsCost";

/**
 *  Calculate cost of a cavalry unit. This function will take into account
 *  all aspects of the unit and return a definitive points cost of the unit.
 */
export function calcCavalryCost(unit: UnitDescriptor) {

    return calcCavalryHandToHandCost(unit.handToHand)
        + calcCavalryWeaponCost(unit.armament)
        + calcCavalryMoraleCost(unit.morale)
        + calcCavalryStaminaCost(unit.stamina)
        + calcSpecialsCost(unit.special, unit);
};