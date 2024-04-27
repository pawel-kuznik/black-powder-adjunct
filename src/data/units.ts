import { SpecialType } from "./special";
import { WeaponType } from "./weapons";

export const unitTypes = [
    "regular-infantry",
    "irregular-infantry",
    "regular-cavalry",
    "irregular-cavalry",
    "foot-artillery",
    "horse-artillery",
    "manhandled-artillery"
] as const;

export type UnitType = typeof unitTypes[number];

export type ShotingType = number | "artillery" | "melee";

export interface UnitDescriptor {
    id: string;
    name: string;
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
    id: "",
    name: "",
    type: "regular-infantry",
    arnament: "pistols",
    handToHand: 1,
    shooting: 3,
    morale: 4,
    stamina: 3,
    special: [],
    affiliation: undefined
} as const;

export const unitMovement = {
    "regular-infantry" : 12,
    "irregular-infantry" : 12,
    "regular-cavalry" : 18,
    "irregular-cavalry" : 18,
    "foot-artillery" : 12,
    "horse-artillery" : 18, 
    "manhandled-artillery" : 6
} as const;

export const defaultUnits : UnitDescriptor[] = [
    {
        id: "default-british-line-infantry",
        name: "Line infantry",
        type: "regular-infantry",
        arnament: "smoothbore-muskets",
        handToHand: 6,
        shooting: 3,
        morale: 4,
        stamina: 3,
        special: [ "first-fire" ],
        affiliation: "british"
    },
    {
        id: "default-british-riflemen",
        name: "Riflemen",
        type: "regular-infantry",
        arnament: "rifled-muskets",
        handToHand: 4,
        shooting: 2,
        morale: 4,
        stamina: 2,
        special: [ "skirmishers", "sharp-shooters" ],
        affiliation: "british"
    },
    {
        id: "default-british-dragoons",
        name: "Dragoons",
        type: "regular-cavalry",
        arnament: "swords",
        handToHand: 8,
        shooting: "melee",
        morale: 4,
        stamina: 3,
        special: [ "heavy-cavalry+1" ],
        affiliation: "british"
    },
    {
        id: "default-british-hussars",
        name: "Hussars",
        type: "regular-cavalry",
        arnament: "sabres",
        handToHand: 6,
        shooting: "melee",
        morale: 4,
        stamina: 3,
        special: [ "marauders" ],
        affiliation: "british"
    },
    {
        id: "default-british-foot-artillery",
        name: "Foot artillery",
        type: "foot-artillery",
        arnament: "smoothbore-artillery",
        handToHand: 1,
        shooting: "artillery",
        morale: 4,
        stamina: 2,
        special: [],
        affiliation: "british"
    },
    {
        id: "default-french-line-infantry",
        name: "Line infantry",
        type: "regular-infantry",
        arnament: "smoothbore-muskets",
        handToHand: 6,
        shooting: 3,
        morale: 4,
        stamina: 3,
        special: [ "reliable" ],
        affiliation: "french"
    },
    {
        id: "default-french-drangoons",
        name: "Dragoons",
        type: "regular-cavalry",
        arnament: "swords",
        handToHand: 8,
        shooting: "melee",
        morale: 4,
        stamina: 2,
        special: [ "heavy-cavalry+1" ],
        affiliation: "french"
    },
    {
        id: "default-french-foot-artillery",
        name: "Foot artillery",
        type: "foot-artillery",
        arnament: "smoothbore-artillery",
        handToHand: 1,
        shooting: "artillery",
        morale: 4,
        stamina: 2,
        special: [],
        affiliation: "french"
    }
];