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

] as const;

export type RuleType = typeof rulesTypes[number];