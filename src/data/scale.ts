export const scaleTypes = [
    "1:1",
    "1:2",
    "inch:cm"
] as const;

export type ScaleType = typeof scaleTypes[number];