import { CommanderDescriptor, baseCommander } from "./commanders";
import { UnitDescriptor } from "./units";

export interface BrigadeUnitDescriptor {
    count: number;
    unit: UnitDescriptor;
};

export interface BrigadeDescriptor {
    id: string;
    name: string;
    commander: CommanderDescriptor;
    units: BrigadeUnitDescriptor[];
};

export const baseBrigade : BrigadeDescriptor = {
    id: '',
    name: '',
    commander: { ...baseCommander },
    units: []
};
