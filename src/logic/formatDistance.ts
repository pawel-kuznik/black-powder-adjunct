import { ScaleType } from "../data/scale";

/**
 *  This is a function that formats the distance that in specified scale.
 */
export function formatDistance(value: number, scale: ScaleType = "1:1") : string {

    if (scale === "inch:cm") return `${value}cm`;
    if (scale === "1:2") return `${value/2}''`;
    return `${value}''`;
};