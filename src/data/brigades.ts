import { CommanderDescriptor, baseCommander } from "./commanders";
import { UnitDescriptor } from "./units";

export interface BrigadeDescriptor {
    name: string;
    commander: CommanderDescriptor;
    units: UnitDescriptor[];
};

export const baseBrigade : BrigadeDescriptor = {
    name: '',
    commander: { ...baseCommander },
    units: []
};
