export const specialTypes = [
    "bloodthirsty",
    "brave",
    "crack",
    "determined-charge",
    "elite",
    "fanatic",
    "ferocious-charge",
    "first-fire",
    "form-square",
    "freshly-raised",
    "heavy-cavalry+d3",
    "heavy-cavalry+1",
    "lancers",
    "marauders",
    "reliable",
    "sharp-shooters",
    "steady",
    "stubborn",
    "skirmishers",
    "superbly",
    "terrifying-charge",
    "tough-fighters",
    "unreliable",
    "untested",
    "valiant",
    "wavering"
] as const;

// @todo add mounted-infantry, poor-shooters, 

export type SpecialType = typeof specialTypes[number];