import { useRef, useState } from "react";
import { useModalControls } from "../Modal";
import { ChooseCommanderDialog } from "./ChooseCommanderDialog";
import { CommanderDescriptor } from "../../data/commanders";
import { UnitDescriptor } from "../../data/units";
import { ChooseUnitDialog } from "./ChooseUnitDialog";
import { WrittenField } from "../WrittenField";
import { calcBrigadeCost, prepareAnew, prepareBrigadeData } from "../../logic";
import { BrigadeDescriptor } from "../../data/brigades";
import { UnitCard } from "../UnitCard";

import "./BrigadeEditor.css";
import { CommanderCard } from "../CommanderCard";
import { BrigadeUnit } from "./BrigadeUnit";

export interface BrigadeEditorProps {

    brigade: BrigadeDescriptor;

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
export function BrigadeEditor({ brigade, onChange } : BrigadeEditorProps) {

    const { show } = useModalControls();

    const [ points, setPoints ] = useState<number>(calcBrigadeCost(brigade));
    const nameRef = useRef<string>(brigade.name);
    const [ commander, setCommander ] = useState<CommanderDescriptor>(brigade.commander);
    const [ units, setUnits ] = useState<UnitDescriptor[]>(brigade.units);

    const updatePoints = (brigade: BrigadeDescriptor) => {

        setPoints(calcBrigadeCost(brigade));
    };

    const handleCommanderPick = (commander: CommanderDescriptor) => {

        setCommander(commander);
        const updated = prepareBrigadeData({ id: brigade.id, name: nameRef.current, commander, units });
        updatePoints(updated);
        onChange?.(updated);
    };

    const handleClickChooseCommander = () => {

        show('choose-commander', ChooseCommanderDialog, { onPick: handleCommanderPick });
    };

    const handleUnitPick = (unit: UnitDescriptor) => {
        
        const updatedUnits = [ ...units, prepareAnew(unit) ]; 
        setUnits(updatedUnits);
        const updated = prepareBrigadeData({ id: brigade.id, name: nameRef.current, commander, units: updatedUnits });
        updatePoints(updated);
        onChange?.(updated);
    };

    const handleClickChooseUnit = () => {

        show('choose-unit', ChooseUnitDialog, { onPick: handleUnitPick });
    };

    const handleNameChange = () => {

        const updated = prepareBrigadeData({ id: brigade.id,  name: nameRef.current, commander, units });
        onChange?.(updated);
    };

    const handleUnitRemove = (unit: UnitDescriptor) => {
        
        const filteredUnits = units.filter(u => u.id !== unit.id);
        setUnits(filteredUnits);
        const updated = prepareBrigadeData({ id: brigade.id, name: nameRef.current, commander, units: filteredUnits });
        updatePoints(updated);
        onChange?.(updated);
    };

    return (
        <section className="brigadeeditor">
            <div className="brigadeeditor-meta">
                <div className="brigadeeditor-data">
                    <WrittenField name="name" placeholder="Brigade name" valueRef={nameRef} onChange={handleNameChange}/>
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
                    <BrigadeUnit key={u.id} unit={u} onRemove={handleUnitRemove}/>
                ))}
                <div className="brigadeeditor-addunit">
                    <button type="button" onClick={handleClickChooseUnit}>Add unit</button>
                </div>
            </div>
        </section>
    );
};
