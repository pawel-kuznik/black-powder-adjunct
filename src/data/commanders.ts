export const commanderMovementTypes = [
    "foot",
    "horse"
] as const;

export type CommanderMovementType = typeof commanderMovementTypes[number];

export const commanderMoveRange = {
    foot: 36,
    horse: 48
} as const;

export const commanderPersonalityTypes = [
    "aggresive",
    "decisive",
    "diffident",
    "headstrong",
    "hesitant",
    "timid",
    "blank"
] as const;

export type CommanderPersonalityType = typeof commanderPersonalityTypes[number];

export interface CommanderDescriptor {
    name: string;
    staffRating: number;
    move: CommanderMovementType;
    personality: CommanderPersonalityType;
    affiliation: undefined | string;
};

export const baseCommander: CommanderDescriptor = {
    name: "commander",
    staffRating: 7,
    move: "horse",
    personality: "blank",
    affiliation: undefined
};
