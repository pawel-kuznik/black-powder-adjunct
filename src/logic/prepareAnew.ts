import { v4 as uuid } from "uuid";
import { ArmyDescriptor } from "../data/armies";
import { BrigadeDescriptor } from "../data/brigades";
import { CommanderDescriptor } from "../data/commanders";
import { UnitDescriptor } from "../data/units";

export function prepareAnew<T = UnitDescriptor | CommanderDescriptor | BrigadeDescriptor | ArmyDescriptor>(input: T) : T {

    const copy = { ...input, id: uuid() };

    if ('brigades' in copy) copy.brigades = (input as any).brigades.map((b : BrigadeDescriptor) => prepareAnew(b));
    if ('units' in copy) copy.units = (input as any).units.map((b : UnitDescriptor) => prepareAnew(b));
    if ('commander' in copy) copy.commander = prepareAnew((input as any).commander);
    if ('general' in copy) copy.general = prepareAnew((input as any).general);

    return copy;
}
