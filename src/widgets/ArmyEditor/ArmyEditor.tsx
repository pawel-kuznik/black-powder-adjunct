import { useState } from "react";
import { CommanderDescriptor } from "../../data/commanders";
import { BrigadeDescriptor } from "../../data/brigades";
import { WrittenField } from "../WrittenField";
import { useModalControls } from "../Modal";
import { ChooseCommanderDialog } from "./ChooseCommanderDialog";
import { prepareArmyData } from "../../logic/prepareArmyData";
import { calcArmyCost, prepareBrigadeData } from "../../logic";
import { BrigadeEditor } from "../BrigadeEditor";

export function ArmyEditor() {

    const { show } = useModalControls();

    const [ points, setPoints ] = useState<number>(0);
    const [ commander, setCommander ] = useState<CommanderDescriptor|undefined>(undefined);
    const [ brigades, setBrigades ] = useState<BrigadeDescriptor[]>([]);

    const updatePoints = (general: CommanderDescriptor | undefined, brigades: BrigadeDescriptor[]) => {

        const brigade = prepareArmyData({ general, brigades });
        setPoints(calcArmyCost(brigade));
    };

    const handleCommanderPick = (commander: CommanderDescriptor) => {

        setCommander(commander);
        updatePoints(commander, brigades);
    };

    const handleClickChooseCommander = () => {

        show('choose-commander', ChooseCommanderDialog, { onPick: handleCommanderPick });
    };

    const handleClickBrigade = () => {

        const newBrigade = prepareBrigadeData({ });
        setBrigades([ ...brigades, newBrigade ]);
    };

    return (
        <div>
            <WrittenField name="name" placeholder="Army name"/>
            {points} points
            <button type="button" onClick={handleClickChooseCommander}>Choose commander</button>
            <button type="button" onClick={handleClickBrigade}>Add brigade</button>

            <div>
                Commander {commander?.name}
            </div>

            <div>
                {brigades.map(b => <BrigadeEditor key={b.id}/>)}
            </div>
        </div>
    );
}