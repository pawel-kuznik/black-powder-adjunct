import { useState } from "react";
import { useModalControls } from "../Modal";
import { ChooseCommanderDialog } from "./ChooseCommanderDialog";
import { CommanderDescriptor, baseCommander } from "../../data/commanders";
import { UnitDescriptor } from "../../data/units";
import { ChooseUnitDialog } from "./ChooseUnitDialog";
import { WrittenField } from "../WrittenField";
import { calcBrigadeCost, prepareAnew, prepareBrigadeData } from "../../logic";
import { BrigadeDescriptor } from "../../data/brigades";
import { UnitCard } from "../UnitCard";

import "./BrigadeEditor.css";
import { CommanderCard } from "../CommanderCard";

export interface BrigadeEditorProps {

    onChange?: (brigade: BrigadeDescriptor) => void;
};

/**
 *  This editor allows for naming the brigade, selecting a commander,
 *  and assigning units to the brigade. The editor in turn will show
 *  a listing of all units and calculate points.
 * 
 *  @note Many scenarios have rules for customization for specific
 *  brigades. It's an interesting idea, but these limits will be
 *  omitted from the editor. 
 */
export function BrigadeEditor({ } : BrigadeEditorProps) {

    const { show } = useModalControls();

    const [ points, setPoints ] = useState<number>(0);
    const [ commander, setCommander ] = useState<CommanderDescriptor>(prepareAnew(baseCommander));
    const [ units, setUnits ] = useState<UnitDescriptor[]>([]);

    const updatePoints = (commander: CommanderDescriptor, units: UnitDescriptor[]) => {

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
        
        const updatedUnits = [ ...units, prepareAnew(unit) ]; 
        setUnits(updatedUnits);
        updatePoints(commander, updatedUnits);
    };

    const handleClickChooseUnit = () => {

        show('choose-unit', ChooseUnitDialog, { onPick: handleUnitPick });        
    };

    return (
        <section className="brigadeeditor">
            <div className="brigadeeditor-meta">
                <div className="brigadeeditor-data">
                    <WrittenField name="name" placeholder="Brigade name"/>
                    <header>
                        <span> {points} points</span>
                    </header>
                </div>
                <div className="brigadeeditor-commander">
                    <CommanderCard commander={commander}/>
                    <button type="button" onClick={handleClickChooseCommander}>Choose commander</button>
                </div>    
            </div>
            <div className="brigadeeditor-composition">
                {units.map(u => (
                    <div className="brigadeeditor-unit">
                        <UnitCard key={u.id} unit={u}/>
                    </div>
                ))}
                <div className="brigadeeditor-addunit">
                    <button type="button" onClick={handleClickChooseUnit}>Add unit</button>
                </div>
            </div>
        </section>
    );
};
