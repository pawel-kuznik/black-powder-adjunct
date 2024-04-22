import { WeaponType, weaponsRange } from "../data/weapons"

/**
 *  Check if given weapon is a melee weapon.
 */
export function isWeaponMelee(input: WeaponType) : boolean {
    return !Object.keys(weaponsRange).includes(input);
};