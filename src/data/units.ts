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
    // British guard infantry
    {
        id: "default-british-guard-infantry-large",
        name: "Guard Infantry",
        type: "regular-infantry",
        armament: "smoothbore-muskets",
        handToHand: 7,
        shooting: 4,
        morale: 3,
        stamina: 4,
        special: [ "reliable", "elite-3", "lie-down", "must-form-square", "columns-of-companies", "mixed-formation", "can-form-skirmish", "first-fire", "steady-line", "four-deep-line", "no-attack-column"  ],
        affiliation: "british"
    },
    // British line infantry
    {
        id: "default-british-line-infantry-regular",
        name: "Line Infantry",
        type: "regular-infantry",
        armament: "smoothbore-muskets",
        handToHand: 6,
        shooting: 3,
        morale: 4,
        stamina: 3,
        special: [ "lie-down", "must-form-square", "columns-of-companies", "mixed-formation", "can-form-skirmish", "first-fire", "steady-line", "four-deep-line", "no-attack-column" ],
        affiliation: "british"    
    },
    // British highland infantry
    {
        id: "default-british-highland-infantry-regular",
        name: "Higland Infantry",
        type: "regular-infantry",
        armament: "smoothbore-muskets",
        handToHand: 6,
        shooting: 3,
        morale: 4,
        stamina: 3,
        special: [ "tough-fighters", "lie-down", "must-form-square", "columns-of-companies", "mixed-formation", "can-form-skirmish", "first-fire", "steady-line", "four-deep-line", "no-attack-column" ],
        affiliation: "british"
    },
    // British light infantry
    {
        id: "default-british-light-infantry-regular",
        name: "Light Infantry",
        type: "regular-infantry",
        armament: "smoothbore-muskets",
        handToHand: 6,
        shooting: 3,
        morale: 4,
        stamina: 3,
        special: [ "sharp-shooters", "skirmishers", "must-form-square", "columns-of-companies", "lie-down", "mixed-formation", "first-fire", "steady-line", "four-deep-line", "no-attack-column" ],
        affiliation: "british"
    },
    // British riflemen
    {
        id: "default-british-riflemen-regular",
        name: "Riflemen",
        type: "regular-infantry",
        armament: "rifled-muskets",
        handToHand: 6,
        shooting: 4,
        morale: 4,
        stamina: 3,
        special: [ "sharp-shooters", "skirmishers", "elite-4", "reliable", "lie-down", "must-form-square", "columns-of-companies", "rifle-mixed-formation", "first-fire", "four-deep-line", "no-attack-column" ],
        affiliation: "british"
    },
    {
        id: "default-british-riflemen-small",
        name: "Riflemen",
        type: "regular-infantry",
        armament: "rifled-muskets",
        handToHand: 4,
        shooting: 3,
        morale: 4,
        stamina: 2,
        special: [ "sharp-shooters", "skirmishers", "elite-4", "reliable", "lie-down", "must-form-square", "columns-of-companies", "rifle-mixed-formation", "first-fire", "four-deep-line", "no-attack-column" ],
        affiliation: "british"
    },
    {
        id: "default-british-riflemen-tiny",
        name: "Riflemen",
        type: "regular-infantry",
        armament: "rifled-muskets",
        handToHand: 2,
        shooting: 2,
        morale: 4,
        stamina: 1,
        special: [ "sharp-shooters", "skirmishers", "elite-4", "reliable", "lie-down", "must-form-square", "columns-of-companies", "rifle-mixed-formation", "first-fire", "four-deep-line", "no-attack-column" ],
        affiliation: "british"
    },
    // British life guards
    {
        id: "default-british-life-guards-regular",
        name: "Life Guards",
        type: "regular-cavalry",
        armament: "sabres",
        handToHand: 8,
        shooting: "melee",
        morale: 3,
        stamina: 3,
        special: [ "reliable", "heavy-cavalry+d3", "galop-at-anything", "deep-formation" ],
        affiliation: "british"
    },
    {
        id: "default-british-life-guards-small",
        name: "Life Guards",
        type: "regular-cavalry",
        armament: "sabres",
        handToHand: 6,
        shooting: "melee",
        morale: 3,
        stamina: 2,
        special: [ "reliable", "heavy-cavalry+d3", "galop-at-anything", "deep-formation" ],
        affiliation: "british"
    },
    // British royal horse guards
    {
        id: "default-british-royal-horse-guards-regular",
        name: "Royal Horse Guards",
        type: "regular-cavalry",
        armament: "sabres",
        handToHand: 8,
        shooting: "melee",
        morale: 3,
        stamina: 3,
        special: [ "reliable", "heavy-cavalry+d3", "galop-at-anything", "deep-formation" ],
        affiliation: "british"
    },
    {
        id: "default-british-royal-horse-guards-small",
        name: "Royal Horse Guards",
        type: "regular-cavalry",
        armament: "sabres",
        handToHand: 6,
        shooting: "melee",
        morale: 3,
        stamina: 2,
        special: [ "reliable", "heavy-cavalry+d3", "galop-at-anything", "deep-formation" ],
        affiliation: "british"
    },
    // British dragoons
    {
        id: "default-british-dragoons-regular",
        name: "Dragoons",
        type: "regular-cavalry",
        armament: "sabres",
        handToHand: 8,
        shooting: "melee",
        morale: 4,
        stamina: 3,
        special: [ "heavy-cavalry+1", "galop-at-anything", "deep-formation" ],
        affiliation: "british"
    },
    // British dragoon Guards
    {
        id: "default-british-dragoon-guards-regular",
        name: "Dragoon guards",
        type: "regular-cavalry",
        armament: "sabres",
        handToHand: 8,
        shooting: "melee",
        morale: 4,
        stamina: 3,
        special: [ "heavy-cavalry+1", "galop-at-anything", "deep-formation" ],
        affiliation: "british"
    },
    // British light dragoons
    {
        id: "default-british-light-dragoons-regular",
        name: "Light dragoons",
        type: "regular-cavalry",
        armament: "sabres",
        handToHand: 6,
        shooting: "melee",
        morale: 4,
        stamina: 3,
        special: [ "marauders", "ferocious-charge", "deep-formation"],
        affiliation: "british"
    },
    // British hussars
    {
        id: "default-british-hussars-regular",
        name: "Hussars",
        type: "regular-cavalry",
        armament: "sabres",
        handToHand: 6,
        shooting: "melee",
        morale: 4,
        stamina: 3,
        special: [ "marauders", "ferocious-charge", "deep-formation" ],
        affiliation: "british"
    },
    // British royal horse artillery
    {
        id: "default-british-royal-horse-artillery",
        name: "Royal Horse Artillery",
        type: "horse-artillery",
        armament: "smoothbore-artillery",
        handToHand: 1,
        shooting: "artillery",
        morale: 4,
        stamina: 1,
        special: [ "reliable", "marauders", "shrapnel" ],
        affiliation: "british"
    },
    // British royal artillery
    {
        id: "default-british-royal-horse-artillery",
        name: "Royal Horse Artillery",
        type: "foot-artillery",
        armament: "smoothbore-artillery",
        handToHand: 1,
        shooting: "artillery",
        morale: 4,
        stamina: 2,
        special: [ "reliable", "shrapnel" ],
        affiliation: "british"
    },
    // Prussian musketeers
    {
        id: "default-prussian-musketeers-regular",
        name: "Prussian Musketeers",
        type: "regular-infantry",
        armament: "smoothbore-muskets",
        handToHand: 6,
        shooting: 3,
        morale: 4,
        stamina: 3,
        special: [ "must-form-square", "mixed-formation", "can-form-skirmish", "columns-of-companies" ],
        affiliation: "prussian"
    },
    // Prussian usiliers
    {
        id: "default-prussian-fusiliers-regular",
        name: "Fusiliers",
        type: "regular-infantry",
        armament: "smoothbore-muskets",
        handToHand: 6,
        shooting: 3,
        morale: 4,
        stamina: 3,
        special: [ "sharp-shooters", "skirmishers", "must-form-square", "mixed-formation", "can-form-skirmish" ],
        affiliation: "prussian"
    },
    // Prussian landwehr
    {
        id: "default-prussian-landwehr-regular",
        name: "Landwehr",
        type: "regular-infantry",
        armament: "smoothbore-muskets",
        handToHand: 6,
        shooting: 3,
        morale: 4,
        stamina: 3,
        special: [ "unreliable", "must-form-square", "mixed-formation", "can-form-skirmish", "columns-of-companies" ],
        affiliation: "prussian"
    },
    // Prussian jagers
    {
        id: "default-prussian-jager-regular",
        name: "Jägers",
        type: "regular-infantry",
        armament: "rifled-muskets",
        handToHand: 6,
        shooting: 3,
        morale: 4,
        stamina: 3,
        special: [ "reliable", "elite-5", "must-form-square", "mixed-formation", "columns-of-companies", "skirmish", "sharp-shooters" ],
        affiliation: "prussian"
    },
    {
        id: "default-prussian-jager-small",
        name: "Jägers",
        type: "regular-infantry",
        armament: "rifled-muskets",
        handToHand: 4,
        shooting: 2,
        morale: 4,
        stamina: 2,
        special: [ "reliable", "elite-5", "must-form-square", "mixed-formation", "columns-of-companies", "skirmish", "sharp-shooters" ],
        affiliation: "prussian"
    },
    {
        id: "default-prussian-jager-regular",
        name: "Jägers",
        type: "regular-infantry",
        armament: "rifled-muskets",
        handToHand: 2,
        shooting: 1,
        morale: 4,
        stamina: 1,
        special: [ "reliable", "elite-5", "must-form-square", "mixed-formation", "columns-of-companies", "skirmish", "sharp-shooters" ],
        affiliation: "prussian"
    },
    // Prussian dragoons
    {
        id: "default-prussian-dragoons-regular",
        name: "Dragoons",
        type: "regular-cavalry",
        armament: "sabres",
        handToHand: 8,
        shooting: "melee",
        morale: 4,
        stamina: 3,
        special: [ "heavy-cavalry+1", "deep-formation" ],
        affiliation: "prussian"
    },
    // Prussian uhlans
    {
        id: "default-prussian-uhlans-regular",
        name: "Uhlans",
        type: "regular-cavalry",
        armament: "lances",
        handToHand: 7,
        shooting: "melee",
        morale: 4,
        stamina: 3,
        special: [ "lancers", "marauders" ],
        affiliation: "prussian"
    }, 
    // Prussian hussars
    {
        id: "default-prussian-hussars-regular",
        name: "Hussars",
        type: "regular-cavalry",
        armament: "sabres",
        handToHand: 6,
        shooting: 3,
        morale: 4,
        stamina: 3,
        special: [ "marauders" ],
        affiliation: "prussian"
    },
    // Prussian landwehr cavalry
    {
        id: "default-prussian-landwehr-cavalry-regular",
        name: "Landwehr Cavalry",
        type: "regular-cavalry",
        armament: "lances",
        handToHand: 5,
        shooting: "melee",
        morale: 4,
        stamina: 3,
        special: [ "lancers", "marauders", "unreliable" ],
        affiliation: "prussian"
    },
    // Prussian line foot artillery
    {
        id: "default-prussian-line-foot-artillery",
        name: "Line Foot Artillery",
        type: "foot-artillery",
        armament: "smoothbore-artillery",
        handToHand: 1,
        shooting: "artillery",
        morale: 4,
        stamina: 2,
        special: [ ],
        affiliation: "prussian"
    },
    // Prussian line horse artillery
    {
        id: "default-prussian-line-horse-artillery",
        name: "Line Horse Artillery",
        type: "horse-artillery",
        armament: "smoothbore-artillery",
        handToHand: 1,
        shooting: "artillery",
        morale: 4,
        stamina: 1,
        special: [ "marauders" ],
        affiliation: "prussian"
    },
    // French light infantry
    {
        id: "default-french-light-infantry-regular",
        name: "Light Infantry",
        type: "regular-infantry",
        armament: "smoothbore-muskets",
        handToHand: 6,
        shooting: 3,
        morale: 4,
        stamina: 3,
        special: [ "sharp-shooters", "skirmish", "pas-de-charge", "must-form-square", "mixed-formation", "columns-of-companies", "can-form-skirmish" ],
        affiliation: "french"
    },
    // French Young Guard
    {
        id: "default-french-young-guard-regular",
        name: "Young Guard",
        type: "regular-infantry",
        armament: "smoothbore-muskets",
        handToHand: 6,
        shooting: 4,
        morale: 3,
        stamina: 3,
        special: [ "reliable", "elite-5", "pas-de-charge", "skirmish", "must-form-square", "mixed-order", "can-form-skirmish" ],
        affiliation: "french"
    },
    // French Old Guard Chasseurs
    {
        id: "default-french-old-guard-chasseurs-regular",
        name: "Old Guard Chasseurs",
        type: "regular-infantry",
        armament: "smoothbore-muskets",
        handToHand: 8,
        shooting: 4,
        morale: 3,
        stamina: 4,
        special: [ "reliable", "elite-3", "tough-fighters", "pas-de-charge", "must-form-square", "mixed-order", "columns-of-companies", "can-form-skirmish" ],
        affiliation: "french"
    },
    // French Middle Guard Chasseurs
    {
        id: "default-french-middle-guard-chasseurs-regular",
        name: "Middle Guard Chasseurs",
        type: "regular-infantry",
        armament: "smoothbore-muskets",
        handToHand: 7,
        shooting: 4,
        morale: 3,
        stamina: 3,
        special: [ "reliable", "elite-4", "pas-de-charge", "must-form-square", "mixed-order", "columns-of-companies", "can-form-skirmish" ],
        affiliation: "french"
    },
    // French Combined Grenadiers
    {
        id: "default-french-combined-grenadiers-regular",
        name: "Combined Grenadiers",
        type: "regular-infantry",
        armament: "smoothbore-muskets",
        handToHand: 5,
        shooting: 3,
        morale: 4,
        stamina: 2,
        special: [ "elite-5", "pas-de-charge", "must-form-square", "mixed-formation", "columns-of-companies", "can-form-skirmish" ],
        affiliation: "french"
    },
    // French Old Guard Grenadiers
    {
        id: "default-french-old-guard-grenadiers-regular",
        name: "Old Guard Grenadiers",
        type: "regular-infantry",
        armament: "smoothbore-muskets",
        handToHand: 8,
        shooting: 4,
        morale: 3,
        stamina: 4,
        special: [ "reliable", "elite-3", "tough-fighters", "pas-de-charge", "must-form-square", "mixed-order", "columns-of-companies", "can-form-skirmish" ],
        affiliation: "french"
    },
    // French Middle Guard Grenadiers
    {
        id: "default-french-middle-guard-grenadiers-regular",
        name: "Middle Guard Grenadiers",
        type: "regular-infantry",
        armament: "smoothbore-muskets",
        handToHand: 7,
        shooting: 4,
        morale: 3,
        stamina: 3,
        special: [ "reliable", "elite-4", "pas-de-charge", "must-form-square", "mixed-order", "columns-of-companies", "can-form-skirmish" ],
        affiliation: "french"
    },
    // French Combined Voltigeurs
    {
        id: "default-french-combined-voltigeurs-regular",
        name: "Combined Voltigeurs",
        type: "regular-infantry",
        armament: "smoothbore-muskets",
        handToHand: 5,
        shooting: 3,
        morale: 4,
        stamina: 2,
        special: [ "skirmish", "sharp-shooters", "must-form-square", "mixed-formation", "columns-of-companies", "can-form-skirmish" ],
        affiliation: "french"
    },
    // French Marines of the Guard
    {
        id: "default-french-marines-of-the-guard-small",
        name: "Marines of the Guard",
        type: "regular-infantry",
        armament: "smoothbore-muskets",
        handToHand: 2,
        shooting: 2,
        morale: 3,
        stamina: 2,
        special: [ "reliable", "elite-4" ],
        affiliation: "french"
    },
    {
        id: "default-french-marines-of-the-guard-tiny",
        name: "Marines of the Guard",
        type: "regular-infantry",
        armament: "smoothbore-muskets",
        handToHand: 3,
        shooting: 1,
        morale: 3,
        stamina: 1,
        special: [ "reliable", "elite-4" ],
        affiliation: "french"
    },
    // French Carabiniers
    {
        id: "default-french-carabiniers-regular",
        name: "The Carabiniers",
        type: "regular-cavalry",
        armament: "sabres",
        handToHand: 9,
        shooting: "melee",
        morale: 3,
        stamina: 3,
        special: [ "reliable", "heavy-cavalry+d3", "deep-formation" ],
        affiliation: "french"
    },
    // French Cuirassiers
    {
        id: "default-french-cuirassiers-regular",
        name: "The Cuirassiers",
        type: "regular-cavalry",
        armament: "sabres",
        handToHand: 9,
        shooting: "melee",
        morale: 3,
        stamina: 3,
        special: [ "reliable", "heavy-cavalry+d3", "deep-formation" ],
        affiliation: "french"
    },
    // French Dragoons
    {
        id: "default-french-dragoons-regular",
        name: "Dragoons",
        type: "regular-cavalry",
        armament: "sabres",
        handToHand: 8,
        shooting: "melee",
        morale: 4,
        stamina: 3,
        special: [ "heavy-cavalry+1", "deep-formation" ],
        affiliation: "french"
    },
    // French Light Dragoons
    {
        id: "default-french-light-dragoons-regular",
        name: "Light Dragoons",
        type: "regular-cavalry",
        armament: "sabres",
        handToHand: 6,
        shooting: "melee",
        morale: 4,
        stamina: 3,
        special: [ "marauders", "deep-formation" ],
        affiliation: "french"
    },
    // French Line Lancers
    {
        id: "default-french-line-lancers-regular",
        name: "Line Lancers",
        type: "regular-cavalry",
        armament: "lances",
        handToHand: 7,
        shooting: "melee",
        morale: 4,
        stamina: 3,
        special: [ "lancers", "marauders", "deep-formation" ],
        affiliation: "french"
    },
    // French Guard Heavy Cavalry
    {
        id: "default-french-guard-heavy-cavalry-regular",
        name: "Guard Heavy Cavalry",
        type: "regular-cavalry",
        armament: "sabres",
        handToHand: 9,
        shooting: "melee",
        morale: 3,
        stamina: 3,
        special: [ "heavy-cavalry+d3", "reliable", "deep-formation" ],
        affiliation: "french"
    },
    {
        id: "default-french-guard-heavy-cavalry-large",
        name: "Guard Heavy Cavalry",
        type: "regular-cavalry",
        armament: "sabres",
        handToHand: 11,
        shooting: "melee",
        morale: 3,
        stamina: 4,
        special: [ "heavy-cavalry+d3", "reliable", "deep-formation" ],
        affiliation: "french"
    },
    // French Empress Dragoons
    {
        id: "default-french-empress-dragoons-regular",
        name: "Empress Dragoons",
        type: "regular-cavalry",
        armament: "sabres",
        handToHand: 9,
        shooting: "melee",
        morale: 3,
        stamina: 3,
        special: [ "heavy-cavalry+d3", "reliable", "deep-formation" ],
        affiliation: "french"
    },
    {
        id: "default-french-empress-dragoons-large",
        name: "Empress Dragoons",
        type: "regular-cavalry",
        armament: "sabres",
        handToHand: 11,
        shooting: "melee",
        morale: 3,
        stamina: 4,
        special: [ "heavy-cavalry+d3", "reliable", "deep-formation" ],
        affiliation: "french"
    },
    // French Gendarme d'Elite
    {
        id: "default-french-gendarme-de-elite-tiny",
        name: "Gendarme d'Elite",
        type: "regular-cavalry",
        armament: "sabres",
        handToHand: 5,
        shooting: "melee",
        morale: 3,
        stamina: 1,
        special: [ "heavy-cavalry+d3", "reliable", "deep-formation" ],
        affiliation: "french"
    },
    // French Chasseurs a Cheval of the Guard
    {
        id: "default-french-chasseurs-a-cheval-of-the-guard-regular",
        name: "Chasseurs a Cheval of the Guard",
        type: "regular-cavalry",
        armament: "sabres",
        handToHand: 7,
        shooting: "melee",
        morale: 3,
        stamina: 3,
        special: [ "reliable", "marauders", "deep-formation" ],
        affiliation: "french"
    },
    {
        id: "default-french-chasseurs-a-cheval-of-the-guard-large",
        name: "Chasseurs a Cheval of the Guard",
        type: "regular-cavalry",
        armament: "sabres",
        handToHand: 9,
        shooting: "melee",
        morale: 3,
        stamina: 4,
        special: [ "reliable", "marauders", "deep-formation" ],
        affiliation: "french"
    },
    // French Guard Lancers
    {
        id: "default-french-guard-lancers-regular",
        name: "Guard Lancers",
        type: "regular-cavalry",
        armament: "sabres",
        handToHand: 8,
        shooting: "melee",
        morale: 3,
        stamina: 3,
        special: [ "reliable", "marauders", "lancers", "deep-formation" ],
        affiliation: "french"
    },
    {
        id: "default-french-guard-lancers-large",
        name: "Guard Lancers",
        type: "regular-cavalry",
        armament: "sabres",
        handToHand: 10,
        shooting: "melee",
        morale: 3,
        stamina: 4,
        special: [ "reliable", "marauders", "lancers", "deep-formation" ],
        affiliation: "french"
    },
    // French Foot Artillery
    {
        id: "default-french-foot-artillery",
        name: "Line Foot Artillery",
        type: "foot-artillery",
        armament: "smoothbore-artillery",
        handToHand: 1,
        shooting: "artillery",
        morale: 4,
        stamina: 2,
        special: [ ],
        affiliation: "french"
    },
    // French Horse Artillery
    {
        id: "default-french-horse-artillery",
        name: "Line Horse Artillery",
        type: "horse-artillery",
        armament: "smoothbore-artillery",
        handToHand: 1,
        shooting: "artillery",
        morale: 4,
        stamina: 1,
        special: [ "marauders" ],
        affiliation: "french"
    },
    // French Guard Heavy Artillery
    {
        id: "default-french-guard-heavy-artillery",
        name: "Guard Heavy Artillery",
        type: "foot-artillery",
        armament: "smoothbore-artillery",
        handToHand: 1,
        shooting: "artillery",
        morale: 4,
        stamina: 3,
        special: [ "reliable", "elite-4" ],
        affiliation: "french"
    },
    // French Guard Marine Artillery
    {
        id: "default-french-marine-artillery",
        name: "Guard Marine Artillery",
        type: "foot-artillery",
        armament: "smoothbore-artillery",
        handToHand: 1,
        shooting: "artillery",
        morale: 4,
        stamina: 3,
        special: [ "reliable", "elite-4" ],
        affiliation: "french"
    },
    // French Guard Horse Artillery
    {
        id: "default-french-horse-artillery",
        name: "Guard Horse Artillery",
        type: "horse-artillery",
        armament: "smoothbore-artillery",
        handToHand: 1,
        shooting: "artillery",
        morale: 4,
        stamina: 2,
        special: [ "reliable", "elite-4", "marauders" ],
        affiliation: "french"
    },
];