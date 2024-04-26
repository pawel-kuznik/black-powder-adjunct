import { BrigadeDescriptor } from "./brigades";
import { CommanderDescriptor, baseCommander } from "./commanders";

export interface ArmyDescriptor {
    id: string;
    name: string;
    general: CommanderDescriptor;
    brigades: BrigadeDescriptor[];
    affiliation: string;
};

export const baseArmy: ArmyDescriptor = {
    id: "",
    name: "",
    general: baseCommander,
    brigades: [],
    affiliation: ""
};