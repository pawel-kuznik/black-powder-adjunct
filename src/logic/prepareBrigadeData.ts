import { BrigadeDescriptor, baseBrigade } from "../data/brigades";
import { CommanderDescriptor } from "../data/commanders";
import { UnitDescriptor } from "../data/units";

export function prepareBrigadeData(input: object, fallback: BrigadeDescriptor = { ...baseBrigade }) : BrigadeDescriptor {

    const brigade = { ...fallback };

    if ('name' in input) brigade.name = String(input.name);
    if ('commander' in input && input.commander) brigade.commander = input.commander as CommanderDescriptor;
    if ('units' in input) brigade.units = input.units as UnitDescriptor[];

    return brigade;
};