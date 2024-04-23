import { SpecialType } from "./special";
import { WeaponType } from "./weapons";

export const unitTypes = [
    "regular-infantry",
    "irregular-infantry",
    "regular-cavalry",
    "irregular-cavalry",
    "artillery",
    "regular-artillery",
    "light-artillery"
] as const;

export type UnitType = typeof unitTypes[number];

export type ShotingType = number | "artillery" | "melee";

export interface UnitDescriptor {
    key: string;
    type: UnitType;
    arnament: WeaponType;
    handToHand: number;
    shooting: ShotingType;
    morale: number;
    stamina: number;
    special: SpecialType[];
    affiliation: undefined | string;
};

export const baseUnit : UnitDescriptor = {
    key: "",
    type: "regular-infantry",
    arnament: "pistols",
    handToHand: 1,
    shooting: 3,
    morale: 4,
    stamina: 3,
    special: [],
    affiliation: undefined
} as const;