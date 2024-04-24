import { BrigadeDescriptor } from "../data/brigades";
import { calcCommanderCost } from "./calcCommanderCost";
import { calcUnitCost } from "./calcUnitCost";

export function calcBrigadeCost(brigade: BrigadeDescriptor) : number {

    const commanderCost = calcCommanderCost(brigade.commander);
    const unitsCost = brigade.units.reduce((sum, unit) => sum + calcUnitCost(unit), 0);

    return commanderCost + unitsCost;
};
