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
    "steady"

] as const;

export type RuleType = typeof rulesTypes[number];