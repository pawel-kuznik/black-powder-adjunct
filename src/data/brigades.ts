import { CommanderDescriptor, baseCommander } from "./commanders";
import { UnitDescriptor } from "./units";

export interface BrigadeDescriptor {
    id: string;
    name: string;
    commander: CommanderDescriptor;
    units: UnitDescriptor[];
};

export const baseBrigade : BrigadeDescriptor = {
    id: '',
    name: '',
    commander: { ...baseCommander },
    units: []
};
