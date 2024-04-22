import { UnitDescriptor } from "../data/units";
import { calcArtilleryHandToHandCost } from "./calcArtilleryHandToHandCost";
import { calcArtilleryMoraleCost } from "./calcArtilleryMoraleCost";
import { calcArtilleryStaminaCost } from "./calcArtilleryStaminaCost";
import { calcArtilleryWeaponCost } from "./calcArtilleryWeaponCost";
import { calcSpecialsCost } from "./calcSpecialsCost";

/**
 *  Calculate cost of an artillery unit. This function will take into account
 *  all aspects of the unit and return a definitive points cost of the unit.
 */
export function calcArtilleryCost(unit: UnitDescriptor) {

    return calcArtilleryHandToHandCost(unit.handToHand)
        + calcArtilleryWeaponCost(unit.arnament)
        + calcArtilleryMoraleCost(unit.morale)
        + calcArtilleryStaminaCost(unit.stamina)
        + calcSpecialsCost(unit.special, unit);
}
