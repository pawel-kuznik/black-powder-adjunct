import { useRef, useState } from "react";
import { CommanderDescriptor } from "../../data/commanders";
import { BrigadeDescriptor } from "../../data/brigades";
import { WrittenField } from "../WrittenField";
import { useModalControls } from "../Modal";
import { ChooseCommanderDialog } from "./ChooseCommanderDialog";
import { prepareArmyData } from "../../logic/prepareArmyData";
import { calcArmyCost, prepareBrigadeData } from "../../logic";
import { BrigadeEditor } from "../BrigadeEditor";
import { useArmyDescriptorsStore } from "../../state/armyDescriptors";
import { useNavigate } from "react-router";
import { CommanderCard } from "../CommanderCard";
import { useTranslation } from "react-i18next";
import { Button } from "../Button";

export interface ArmyEditorProps {
    id?: string;
};

export function ArmyEditor({ id = '' } : ArmyEditorProps) {

    const { t } = useTranslation();
    const { show } = useModalControls();
    const navigate = useNavigate();

    const armyDescriptors = useArmyDescriptorsStore();

    const army = armyDescriptors.descriptors[id] || prepareArmyData({ }); 

    const nameRef = useRef<string>(army.name);
    const [ points, setPoints ] = useState<number>(calcArmyCost(army));
    const [ commander, setCommander ] = useState<CommanderDescriptor>(army.general);
    const [ brigades, setBrigades ] = useState<BrigadeDescriptor[]>(army.brigades);

    const updatePoints = (general: CommanderDescriptor, brigades: BrigadeDescriptor[]) => {

        setPoints(calcArmyCost(prepareArmyData({ general, brigades })));
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

    const handleRemoveBrigade = (brigade: BrigadeDescriptor) => {

        const filtered = brigades.filter(b => b.id !== brigade.id);
        setBrigades(filtered);
        updatePoints(commander, filtered);
    };

    const handleBrigadeChange = (brigade: BrigadeDescriptor) => {

        const idx = brigades.findIndex(b => b.id === brigade.id);
        if (idx === -1) return;

        brigades.splice(idx, 1, brigade);
        const updated = [...brigades];
        setBrigades(updated);
        updatePoints(commander, updated);
    };

    const handleClickSave = () => {

        const army = prepareArmyData({
            id,
            name: nameRef.current,
            general: commander,
            brigades
        });

        armyDescriptors.store(army);
    };

    const handleClickRemove = () => {

        armyDescriptors.remove(army);

        navigate("/lists");
    };

    const commanderControls = (
        <>
            <Button label={t("armyeditor.swith-commander.label")} onClick={handleClickChooseCommander} />
        </>
    );

    return (
        <div>
            <WrittenField name="name" placeholder="Army name" valueRef={nameRef}/>
            {points} points
            <button type="button" onClick={handleClickSave}>Save</button>
            <button type="button" onClick={handleClickRemove}>Remove</button>
            <button type="button" onClick={handleClickBrigade}>Add brigade</button>

            <div>
                <h2>{t("armyeditor.general.title")}</h2>
                <CommanderCard commander={commander} controls={commanderControls}/>
            </div>

            <div>
                <h2>{t("armyeditor.brigades.title")}</h2>
                {brigades.map(b => <BrigadeEditor
                    key={b.id}
                    brigade={b}
                    onChange={handleBrigadeChange}
                    onRemove={handleRemoveBrigade}
                />)}
            </div>
        </div>
    );
}