import { WeaponType, weaponsRange } from "../data/weapons";

/**
 *  Calculate weapons cost for a weapon used by infantry. The cost is mostly
 *  based on the range of the passed weapon.
 */
export function calcInfantryWeaponCost(weapon: WeaponType) {
 
    if (!(weapon in weaponsRange)) return 0;

    const range = (weaponsRange as { [key: string]: number })[weapon];

    if (range >= 30) return 5;
    if (range >= 24) return 4;
    if (range >= 18) return 3;
    if (range >= 12) return 2;
    return 1;
}