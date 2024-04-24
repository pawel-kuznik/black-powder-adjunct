import { CommanderDescriptor } from "../data/commanders";

export function calcCommanderCost(commander: CommanderDescriptor) : number {

    return (commander.staffRating - 7) * 25; 
}