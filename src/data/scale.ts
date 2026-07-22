export const scaleTypes = [
    "1:1",
    "1:2",
    "inch:cm"
] as const;

/**
 * The type of the scale that the website should be set in. The scale
 * describes how one unit of movement or range (default described as inch
 * in books) is represented.
 */
export type ScaleType = typeof scaleTypes[number];