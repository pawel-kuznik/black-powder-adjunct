export const rulesTypes = [
    // Albion Triumphant infantry rules
    "detached-ligh-companies",
    "four-deep-line",
    "cannot-form-attack-column",
    "column-of-companies",
    "rifle-mixed-formation",
    "lie-down",
    // Albion Triumphan cavalry rules
    "ferocious-charge",
    "gallop-at-anything",
    "deep-formation",
    "half-battery",
    // base rules
    "form-square",
    "first-fire",
    "lancers",
    "marauders",
    "heavy-cavalry+d3",
    "heavy-cavalry+1",
    "freshly-raised"

] as const;

export type RuleType = typeof rulesTypes[number];