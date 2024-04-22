import { WeaponType, weaponsRange } from "../data/weapons";

export function calcWeaponRange(weapon: WeaponType, scale: number = 1) {

    if (!(weapon in weaponsRange)) return 0;

    const range = (weaponsRange as { [key: string]: number })[weapon];

    return range / scale;
}
