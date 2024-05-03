import { CommanderDescriptor } from "../data/commanders";

export function calcCommanderCost(commander: CommanderDescriptor) : number {

    return Math.max((commander.staffRating - 7) * 25, 0); 
}