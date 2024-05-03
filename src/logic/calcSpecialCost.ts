import { SpecialType } from "../data/special";
import { UnitDescriptor } from "../data/units";
import { isUnitCavalry } from "./isUnitCavalry";
import { isUnitInfantry } from "./isUnitInfantry";

/**
 *  This function calculates the cost of a special trait for a specific unit.
 *  The values are based on the table found in Albion Triumphant vol 2 supplement.
 */
export function calcSpecialCost(special: SpecialType, unit: UnitDescriptor) {

    switch(special) {
        case 'bloodthirsty': return 3;
        case 'brave': return 5;
        case 'crack': 
            if (unit.morale >= 6) return 1;
            if (unit.morale >= 5) return 2;
            if (unit.morale >= 4) return 3;
            return 4;
        case 'determined-charge': return -5;
        case 'elite-4': return 6;
        case 'fanatic': 
            if (isUnitInfantry(unit)) return 8;
            if (isUnitCavalry(unit)) return 10;
            return 0;
        case 'ferocious-charge':
            if (isUnitInfantry(unit)) return 3;
            if (isUnitCavalry(unit)) return 5;
            return 0;
        case 'form-square': return 0;
        case 'freshly-raised': return -3;
        case 'heavy-cavalry+d3': return 8;
        case 'heavy-cavalry+1': return 4;
        case 'lancers': return 5;
        case 'marauders': return 5;
        case 'reliable': return 4;
        case 'sharp-shooters': return 3;
        case 'steady': return 5;
        case 'stubborn': return 5;
        case 'superbly-drilled': return 5;
        case 'terrifying-charge': return 5;
        case 'tough-fighters':
            if (isUnitInfantry(unit)) return 1;
            if (isUnitCavalry(unit)) return 2;
            return 0;
        case 'unreliable': return 3;
        case 'untested': return 0;
        case 'valiant': return 3;
        case 'wavering': return unit.stamina * 2 * -1;
        case 'pas-de-charge': return 2;
        case 'mixed-formation': return 1;
        case "steady-line": return 1;
    }

    // @todo: handle "skirmishers" 

    return 0;
};
