import { useRef, useState } from "react";
import { useModalControls } from "../Modal";
import { ChooseCommanderDialog } from "./ChooseCommanderDialog";
import { CommanderDescriptor } from "../../data/commanders";
import { UnitDescriptor } from "../../data/units";
import { ChooseUnitDialog } from "./ChooseUnitDialog";
import { WrittenField } from "../WrittenField";
import { calcBrigadeCost, prepareAnew, prepareBrigadeData } from "../../logic";
import { BrigadeDescriptor, BrigadeUnitDescriptor } from "../../data/brigades";
import { CommanderCard } from "../CommanderCard";
import { BrigadeUnit } from "./BrigadeUnit";
import { useTranslation } from "react-i18next";
import { Button } from "../Button";

import "./BrigadeEditor.css";
import { PointsBadge } from "../PointsBadge";


export interface BrigadeEditorProps {

    /**
     *  The brigade to edit.
     */
    brigade: BrigadeDescriptor;

    /**
     *  A callback called when user edits the brigade.
     */
    onChange?: (brigade: BrigadeDescriptor) => void;

    /**
     *  A callback called when user wants to remove the brigade.
     */
    onRemove?: (brigade: BrigadeDescriptor) => void;
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
export function BrigadeEditor({ brigade, onChange, onRemove } : BrigadeEditorProps) {

    const { t } = useTranslation();
    const { show } = useModalControls();

    const [ points, setPoints ] = useState<number>(calcBrigadeCost(brigade));
    const nameRef = useRef<string>(brigade.name);
    const [ commander, setCommander ] = useState<CommanderDescriptor>(brigade.commander);
    const [ units, setUnits ] = useState<BrigadeUnitDescriptor[]>(brigade.units);

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
        
        const updatedUnits = [ ...units, { count: 1, unit: prepareAnew(unit) } ]; 
        setUnits(updatedUnits);
        const updated = prepareBrigadeData({ id: brigade.id, name: nameRef.current, commander, units: updatedUnits });
        updatePoints(updated);
        onChange?.(updated);
    };

    const handleUnitChange = (unit: BrigadeUnitDescriptor) => {

        const idx = units.findIndex(u => u.unit.id === unit.unit.id);
        console.log('unit-change', idx, unit, units);
        if (idx === -1) return;

        const copy = [...units];
        copy[idx] = unit;
        setUnits(copy);
        const updated = prepareBrigadeData({ id: brigade.id, name: nameRef.current, commander, units: copy });
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

    const handleUnitRemove = (unit: BrigadeUnitDescriptor) => {
        
        const filteredUnits = units.filter(u => u.unit.id !== unit.unit.id);
        setUnits(filteredUnits);
        const updated = prepareBrigadeData({ id: brigade.id, name: nameRef.current, commander, units: filteredUnits });
        updatePoints(updated);
        onChange?.(updated);
    };

    const handleBrigadeRemove = () =>{

        onRemove?.(prepareBrigadeData({ id: brigade.id, name: nameRef.current, commander, units }));
    };

    const commanderControls = (
        <> 
            <Button label={t("brigadeeditor.choose-commander.label")} onClick={handleClickChooseCommander}/>
        </>
    );

    return (
        <section className="brigadeeditor">
            <div className="brigadeeditor-meta">
                <div className="brigadeeditor-data common-cardbox">
                    <div className="brigadeeditor-data-inner">
                        <WrittenField name="name" placeholder={String(t("brigadeeditor.name.placeholder"))} valueRef={nameRef} onChange={handleNameChange}/>
                        <PointsBadge layout="brick" points={points}/>
                        {onRemove && <Button label={t("brigadeeditor.remove-brigade.label")} style="red" submit={false} onClick={handleBrigadeRemove}/>}
                    </div>
                </div>
                <div className="brigadeeditor-commander">
                    <CommanderCard commander={commander} controls={commanderControls}/>
                </div>    
            </div>
            <div className="brigadeeditor-composition">
                {units.map(u => (
                    <BrigadeUnit key={u.unit.id} unit={u} onChange={handleUnitChange} onRemove={handleUnitRemove}/>
                ))}
                <div className="brigadeeditor-addunit">
                    <Button
                        submit={false}
                        onClick={handleClickChooseUnit}
                        label={t("brigadeeditor.add-unit.label")}
                    />
                </div>
            </div>
        </section>
    );
};
