import { WeaponType, rangedWeapons } from "../data/weapons";

/**
 *  Check if a given weapon is a ranged weapon (but not artillery).
 */
export function isWeaponRanged(weapon: WeaponType) : boolean {
    return (rangedWeapons as unknown as string[]).includes(weapon);
};