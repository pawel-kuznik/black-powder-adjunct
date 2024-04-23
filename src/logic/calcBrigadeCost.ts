import { BrigadeDescriptor } from "../data/brigades";
import { calcUnitCost } from "./calcUnitCost";

export function calcBrigadeCost(brigade: BrigadeDescriptor) : number {

    const commanderCost = 0;
    const unitsCost = brigade.units.reduce((sum, unit) => sum + calcUnitCost(unit), 0);

    return commanderCost + unitsCost;
};
