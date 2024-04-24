import { BrigadeDescriptor } from "./brigades";
import { CommanderDescriptor, baseCommander } from "./commanders";

export interface ArmyDescriptor {
    name: string;
    general: CommanderDescriptor;
    brigades: BrigadeDescriptor[];
};

export const baseArmy: ArmyDescriptor = {
    name: "",
    general: baseCommander,
    brigades: []
};