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

export const unitSizes = [
    "tiny",
    "artillery",
    "small",
    "regular",
    "large"
] as const;

export type UnitSize = typeof unitSizes[number];

export interface UnitDescriptor {
    id: string;
    name: string;
    type: UnitType;
    armament: WeaponType;
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
    armament: "pistols",
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
        id: "default-british-line-infantry-regular",
        name: "Line infantry",
        type: "regular-infantry",
        armament: "smoothbore-muskets",
        handToHand: 6,
        shooting: 3,
        morale: 4,
        stamina: 3,
        special: [ "first-fire" ],
        affiliation: "british"
    },
    {
        id: "default-british-line-infantry-small",
        name: "Line infantry",
        type: "regular-infantry",
        armament: "smoothbore-muskets",
        handToHand: 4,
        shooting: 2,
        morale: 4,
        stamina: 2,
        special: [ "first-fire" ],
        affiliation: "british"
    },
    {
        id: "default-british-line-infantry-tiny",
        name: "Line infantry",
        type: "regular-infantry",
        armament: "smoothbore-muskets",
        handToHand: 1,
        shooting: 1,
        morale: 4,
        stamina: 1,
        special: [ "first-fire" ],
        affiliation: "british"
    },
    {
        id: "default-british-line-infantry-large",
        name: "Line infantry",
        type: "regular-infantry",
        armament: "smoothbore-muskets",
        handToHand: 8,
        shooting: 4,
        morale: 4,
        stamina: 4,
        special: [ "first-fire" ],
        affiliation: "british"
    },
    {
        id: "default-british-riflemen-tiny",
        name: "Riflemen",
        type: "irregular-infantry",
        armament: "rifled-muskets",
        handToHand: 1,
        shooting: 1,
        morale: 4,
        stamina: 1,
        special: [ "skirmishers", "sharp-shooters" ],
        affiliation: "british"
    },
    {
        id: "default-british-riflemen-small",
        name: "Riflemen",
        type: "irregular-infantry",
        armament: "rifled-muskets",
        handToHand: 4,
        shooting: 2,
        morale: 4,
        stamina: 2,
        special: [ "skirmishers", "sharp-shooters" ],
        affiliation: "british"
    },
    {
        id: "default-british-riflemen-regular",
        name: "Riflemen",
        type: "regular-infantry",
        armament: "rifled-muskets",
        handToHand: 6,
        shooting: 3,
        morale: 4,
        stamina: 3,
        special: [ "skirmishers", "sharp-shooters" ],
        affiliation: "british"
    },
    {
        id: "default-british-dragoons",
        name: "Dragoons",
        type: "regular-cavalry",
        armament: "swords",
        handToHand: 8,
        shooting: "melee",
        morale: 4,
        stamina: 3,
        special: [ "heavy-cavalry+1" ],
        affiliation: "british"
    },
    {
        id: "default-british-heavy-dragoons-regular",
        name: "Heavy dragoons",
        type: "regular-cavalry",
        armament: "swords",
        handToHand: 9,
        shooting: "melee",
        morale: 4,
        stamina: 3,
        special: [ "elite", "heavy-cavalry+d3" ],
        affiliation: "british"
    },
    {
        id: "default-british-light-dragoons-regular",
        name: "Light dragoons",
        type: "irregular-cavalry",
        armament: "swords",
        handToHand: 6,
        shooting: "melee",
        morale: 4,
        stamina: 3,
        special: [ "marauders" ],
        affiliation: "british"
    },
    {
        id: "default-british-light-dragoons-small",
        name: "Light dragoons",
        type: "irregular-cavalry",
        armament: "swords",
        handToHand: 4,
        shooting: "melee",
        morale: 4,
        stamina: 2,
        special: [ "marauders" ],
        affiliation: "british"
    },
    {
        id: "default-british-hussars-regular",
        name: "Hussars",
        type: "irregular-cavalry",
        armament: "sabres",
        handToHand: 6,
        shooting: "melee",
        morale: 4,
        stamina: 3,
        special: [ "marauders" ],
        affiliation: "british"
    },
    {
        id: "default-british-hussars-small",
        name: "Hussars",
        type: "irregular-cavalry",
        armament: "swords",
        handToHand: 4,
        shooting: "melee",
        morale: 4,
        stamina: 2,
        special: [ "marauders" ],
        affiliation: "british"
    },
    {
        id: "default-british-foot-artillery",
        name: "Foot artillery",
        type: "foot-artillery",
        armament: "smoothbore-artillery",
        handToHand: 1,
        shooting: "artillery",
        morale: 4,
        stamina: 2,
        special: [],
        affiliation: "british"
    },
    {
        id: "default-french-line-infantry-regular",
        name: "Line infantry",
        type: "regular-infantry",
        armament: "smoothbore-muskets",
        handToHand: 6,
        shooting: 3,
        morale: 4,
        stamina: 3,
        special: [ "reliable" ],
        affiliation: "french"
    },
    {
        id: "default-french-line-infantry-small",
        name: "Line infantry",
        type: "regular-infantry",
        armament: "smoothbore-muskets",
        handToHand: 4,
        shooting: 2,
        morale: 4,
        stamina: 2,
        special: [ "reliable" ],
        affiliation: "french"
    },
    {
        id: "default-french-line-infantry-tiny",
        name: "Line infantry",
        type: "regular-infantry",
        armament: "smoothbore-muskets",
        handToHand: 1,
        shooting: 1,
        morale: 4,
        stamina: 1,
        special: [ "reliable" ],
        affiliation: "french"
    },
    {
        id: "default-french-line-infantry-large",
        name: "Line infantry",
        type: "regular-infantry",
        armament: "smoothbore-muskets",
        handToHand: 8,
        shooting: 4,
        morale: 4,
        stamina: 4,
        special: [ "reliable" ],
        affiliation: "french"
    },
    {
        id: "default-french-veteran-infantry-regular",
        name: "Veteran infantry",
        type: "regular-infantry",
        armament: "smoothbore-muskets",
        handToHand: 6,
        shooting: 3,
        morale: 3,
        stamina: 3,
        special: [ "elite", "reliable" ],
        affiliation: "french"
    },
    {
        id: "default-french-veteran-infantry-small",
        name: "Veteran infantry",
        type: "regular-infantry",
        armament: "smoothbore-muskets",
        handToHand: 4,
        shooting: 2,
        morale: 3,
        stamina: 2,
        special: [ "elite", "reliable" ],
        affiliation: "french"
    },
    {
        id: "default-french-veteran-infantry-tiny",
        name: "Veteran infantry",
        type: "regular-infantry",
        armament: "smoothbore-muskets",
        handToHand: 1,
        shooting: 1,
        morale: 3,
        stamina: 1,
        special: [ "elite", "reliable" ],
        affiliation: "french"
    },
    {
        id: "default-french-veteran-infantry-large",
        name: "Veteran infantry",
        type: "regular-infantry",
        armament: "smoothbore-muskets",
        handToHand: 8,
        shooting: 4,
        morale: 3,
        stamina: 4,
        special: [ "elite", "reliable" ],
        affiliation: "french"
    },
    {
        id: "default-french-guard-infantry-regular",
        name: "Guard infantry",
        type: "regular-infantry",
        armament: "smoothbore-muskets",
        handToHand: 7,
        shooting: 3,
        morale: 3,
        stamina: 3,
        special: [ "elite", "reliable" ],
        affiliation: "french"
    },
    {
        id: "default-french-guard-infantry-small",
        name: "Guard infantry",
        type: "regular-infantry",
        armament: "smoothbore-muskets",
        handToHand: 5,
        shooting: 2,
        morale: 3,
        stamina: 2,
        special: [ "elite", "reliable" ],
        affiliation: "french"
    },
    {
        id: "default-french-guard-infantry-tiny",
        name: "Guard infantry",
        type: "regular-infantry",
        armament: "smoothbore-muskets",
        handToHand: 1,
        shooting: 1,
        morale: 3,
        stamina: 1,
        special: [ "elite", "reliable" ],
        affiliation: "french"
    },
    {
        id: "default-french-guard-infantry-large",
        name: "Guard infantry",
        type: "regular-infantry",
        armament: "smoothbore-muskets",
        handToHand: 9,
        shooting: 4,
        morale: 3,
        stamina: 4,
        special: [ "elite", "reliable" ],
        affiliation: "french"
    },
    {
        id: "default-french-voltigeurs-small",
        name: "Voltigeurs",
        type: "irregular-infantry",
        armament: "rifled-muskets",
        handToHand: 4,
        shooting: 2,
        morale: 4,
        stamina: 2,
        special: [ "sharp-shooters", "skirmishers" ],
        affiliation: "french" 
    },
    {
        id: "default-french-voltigeurs-tiny",
        name: "Voltigeurs",
        type: "irregular-infantry",
        armament: "rifled-muskets",
        handToHand: 1,
        shooting: 1,
        morale: 4,
        stamina: 1,
        special: [ "sharp-shooters", "skirmishers" ],
        affiliation: "french"
    },
    {
        id: "default-french-hussars-regular",
        name: "Hussars",
        type: "irregular-cavalry",
        armament: "swords",
        handToHand: 6,
        shooting: "melee",
        morale: 4,
        stamina: 3,
        special: [ "marauders" ],
        affiliation: "french"
    },
    {
        id: "default-french-carabinier-regular",
        name: "Carabinier",
        type: "regular-cavalry",
        armament: "swords",
        handToHand: 9,
        shooting: "melee",
        morale: 3,
        stamina: 3,
        special: [ "elite", "heavy-cavalry+d3" ],
        affiliation: "french"
    },
    {
        id: "default-french-hussars-small",
        name: "Hussars",
        type: "irregular-cavalry",
        armament: "swords",
        handToHand: 4,
        shooting: "melee",
        morale: 4,
        stamina: 2,
        special: [ "marauders" ],
        affiliation: "french"
    },
    {
        id: "default-french-chasseurs-regular",
        name: "Chasseurs",
        type: "irregular-cavalry",
        armament: "swords",
        handToHand: 6,
        shooting: "melee",
        morale: 4,
        stamina: 3,
        special: [ "marauders" ],
        affiliation: "french"
    },
    {
        id: "default-french-chasseurs-small",
        name: "Chasseurs",
        type: "irregular-cavalry",
        armament: "swords",
        handToHand: 4,
        shooting: "melee",
        morale: 4,
        stamina: 2,
        special: [ "marauders" ],
        affiliation: "french"
    },
    {
        id: "default-french-drangoons-small",
        name: "Dragoons",
        type: "regular-cavalry",
        armament: "swords",
        handToHand: 8,
        shooting: "melee",
        morale: 4,
        stamina: 2,
        special: [ "heavy-cavalry+1" ],
        affiliation: "french"
    },
    {
        id: "default-french-lancers-regular",
        name: "Lancers",
        type: "irregular-cavalry",
        armament: "lances",
        handToHand: 6,
        shooting: "melee",
        morale: 4,
        stamina: 3,
        special: [ "marauders", "lancers" ],
        affiliation: "french"
    },
    {
        id: "default-french-lancers-of-guard-regular",
        name: "Lancers of the Guard",
        type: "irregular-cavalry",
        armament: "lances",
        handToHand: 7,
        shooting: "melee",
        morale: 4,
        stamina: 3,
        special: [ "elite", "lancers" ],
        affiliation: "french"
    },
    {
        id: "default-french-foot-artillery",
        name: "Foot artillery",
        type: "foot-artillery",
        armament: "smoothbore-artillery",
        handToHand: 1,
        shooting: "artillery",
        morale: 4,
        stamina: 2,
        special: [],
        affiliation: "french"
    },
    {
        id: "default-french-horse-artillery",
        name: "Horse artillery",
        type: "horse-artillery",
        armament: "smoothbore-artillery",
        handToHand: 1,
        shooting: "artillery",
        morale: 4,
        stamina: 1,
        special: [ "marauders" ],
        affiliation: "french"
    }
];