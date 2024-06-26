import { v4 as uuid } from "uuid"
import { BrigadeDescriptor, BrigadeUnitDescriptor, baseBrigade } from "../data/brigades";
import { CommanderDescriptor } from "../data/commanders";

export function prepareBrigadeData(input: object, fallback: BrigadeDescriptor = { ...baseBrigade }) : BrigadeDescriptor {

    const brigade = { ...fallback };

    if ('id' in input && input.id) brigade.id = String(input.id);
    else brigade.id = uuid();

    if ('name' in input) brigade.name = String(input.name);
    if ('commander' in input && input.commander) brigade.commander = input.commander as CommanderDescriptor;
    if ('units' in input) brigade.units = input.units as BrigadeUnitDescriptor[];

    return brigade;
};