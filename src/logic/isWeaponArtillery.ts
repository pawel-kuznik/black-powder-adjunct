import { WeaponType, artilleryWeapons } from "../data/weapons";

/**
 *  Check if given weapon is artillery.
 */
export function isWeaponArtillery(weapon: WeaponType) : boolean {
    return (artilleryWeapons as unknown as string[]).includes(weapon);
}