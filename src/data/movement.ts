export const movement = {
    "infantry": 12,
    "limbered-foot-artillery": 12,
    "wagons": 12,
    "cavalry": 18,
    "limbered-horse-artillery": 18,
    "manhandled-artillery": 6,
    "manhandled-battalion-guns": 12,
    "commender-foot": 36,
    "commander-horseback": 48
} as const;

export const movementTypes = Object.keys(movement);
