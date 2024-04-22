import { WeaponType, weaponsRange } from "../data/weapons";

/**
 *  Calculate weapons cost for a weapon used by artillery. The cost is mostly
 *  based on the range of the passed weapon.
 */
export function calcArtilleryWeaponCost(weapon: WeaponType) {

    if (!(weapon in weaponsRange)) return 0;

    const range = (weaponsRange as { [key: string]: number })[weapon];

    if (range >= 48) return 20;
    if (range >= 36) return 16;
    if (range >= 24) return 12;
    if (range >= 12) return 8;
    return 4;
}
