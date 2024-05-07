export const specialTypes = [
    // albion tiumphant
    "detached-ligh-companies",
    "four-deep-line",
    "cannot-form-attack-column",
    "column-of-companies",
    "rifle-mixed-formation",
    "lie-down",
    "ferocious-charge",
    "gallop-at-anything",
    "deep-formation",
    "half-battery",
    // base
    "brave",
    "crack",
    "elite-2",
    "elite-3",
    "elite-4",
    "elite-5",
    "elite-6",
    "fanatics",
    "ferocious-charge",
    "form-square",
    "first-fire",
    "lancers",
    "marauders",
    "heavy-cavalry+d3",
    "heavy-cavalry+1",
    "freshly-raised",
    "mounted-infantry",
    "poor-shooters",
    "reliable",
    "sharp-shooters",
    "steady",
    "stubborn",
    "superbly-drilled",
    "terrifying-charge",
    "tough-fighters",
    "unreliable",
    "untested",
    "valiant",
    "wavering",
    "skirmishers"
] as const;

export type SpecialType = typeof specialTypes[number];

export const rulesTypes = [
    ...specialTypes,
    "break-test"
] as const;

export type RuleType = typeof rulesTypes[number];

