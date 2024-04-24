import { v4 as uuid } from "uuid";
import { ArmyDescriptor, baseArmy } from "../data/armies";
import { BrigadeDescriptor } from "../data/brigades";
import { CommanderDescriptor } from "../data/commanders";

export function prepareArmyData(input: object, fallback : ArmyDescriptor = { ...baseArmy }) : ArmyDescriptor {
    
    const army = { ...fallback };

    if ('id' in input) army.id = String(input.id);
    else army.id = uuid();
    
    if ('name' in input) army.name = String(input.name);
    if ('general' in input && input.general) army.general = input.general as CommanderDescriptor;
    if ('brigades' in input) army.brigades = input.brigades as BrigadeDescriptor[];

    return army;
}