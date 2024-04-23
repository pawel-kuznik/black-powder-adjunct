import { useState } from "react";
import { useModalControls } from "../Modal";
import { ChooseCommanderDialog } from "./ChooseCommanderDialog";
import { CommanderDescriptor } from "../../data/commanders";
import { UnitDescriptor } from "../../data/units";
import { ChooseUnitDialog } from "./ChooseUnitDialog";
import { WrittenField } from "../WrittenField";
import { calcBrigadeCost, prepareBrigadeData } from "../../logic";

/**
 *  This editor allows for naming the brigade, selecting a commander,
 *  and assigning units to the brigade. The editor in turn will show
 *  a listing of all units and calculate points.
 * 
 *  @note Many scenarios have rules for customization for specific
 *  brigades. It's an interesting idea, but these limits will be
 *  omitted from the editor. 
 */
export function BrigadeEditor() {

    const { show } = useModalControls();

    const [ points, setPoints ] = useState<number>(0);
    const [ commander, setCommander ] = useState<CommanderDescriptor|undefined>(undefined);
    const [ units, setUnits ] = useState<UnitDescriptor[]>([]);

    const updatePoints = (commander: CommanderDescriptor | undefined, units: UnitDescriptor[]) => {

        const brigade = prepareBrigadeData({ commander, units });
        setPoints(calcBrigadeCost(brigade));
    };

    const handleCommanderPick = (commander: CommanderDescriptor) => {

        setCommander(commander);
        updatePoints(commander, units);
    };

    const handleClickChooseCommander = () => {

        show('choose-commander', ChooseCommanderDialog, { onPick: handleCommanderPick });
    };

    const handleUnitPick = (unit: UnitDescriptor) => {
        
        const updatedUnits = [ ...units, unit ]; 
        setUnits(updatedUnits);
        updatePoints(commander, updatedUnits);
    };

    const handleClickChooseUnit = () => {

        show('choose-unit', ChooseUnitDialog, { onPick: handleUnitPick });        
    };

    return (
        <section>
            <WrittenField name="name"/>
            <header>
                <span> {points} points</span>
            </header>
            <button type="button" onClick={handleClickChooseCommander}>Choose commander</button>
            <button type="button" onClick={handleClickChooseUnit}>Add unit</button>

            <div>
                Commander {commander?.name}
            </div>
            <div>
                {units.map((u, k) => <span key={k}>{u.key}</span>)}
            </div>
        </section>
    );
};
