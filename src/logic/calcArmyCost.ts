import { ArmyDescriptor } from "../data/armies";
import { calcBrigadeCost } from "./calcBrigadeCost";
import { calcCommanderCost } from "./calcCommanderCost";

export function calcArmyCost(army: ArmyDescriptor) : number {

    const commanderCost = calcCommanderCost(army.general);
    const brigadesCost = army.brigades.reduce((total, brigade) => total + calcBrigadeCost(brigade), 0);

    return commanderCost + brigadesCost;
}