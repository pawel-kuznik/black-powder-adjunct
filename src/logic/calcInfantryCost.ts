import { UnitDescriptor } from "../data/units";
import { calcInfantryHandToHandCost } from "./calcInfantryHandToHandCost";
import { calcInfantryMoraleCost } from "./calcInfantryMoraleCost";
import { calcInfantryStaminaCost } from "./calcInfantryStaminaCost";
import { calcInfantryWeaponCost } from "./calcInfantryWeaponCost";
import { calcSpecialsCost } from "./calcSpecialsCost";

/**
 *  Calculate cost of an infantry unit. This function will take into account
 *  all aspects of the unit and return a definitive points cost of the unit.
 */
export function calcInfantryCost(unit: UnitDescriptor) {

    return calcInfantryHandToHandCost(unit.handToHand)
        + calcInfantryWeaponCost(unit.armament)
        + calcInfantryMoraleCost(unit.morale)
        + calcInfantryStaminaCost(unit.stamina)
        + calcSpecialsCost(unit.special, unit);
}
