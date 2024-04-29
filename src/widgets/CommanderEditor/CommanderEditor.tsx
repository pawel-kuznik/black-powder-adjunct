import { useReducer } from "react";
import { useTranslation } from "react-i18next";
import { CommanderDescriptor, commanderMoveRange, commanderMovementTypes, commanderPersonalityTypes } from "../../data/commanders";
import { calcCommanderCost, formatDistance, prepareCommanderData } from "../../logic";
import { BasicForm } from "../BasicForm";
import { FormField } from "../FormField";
import { WrittenField } from "../WrittenField";
import { useAffiliations } from "../../state/useAffiliations";
import { PointsBadge } from "../PointsBadge";

import "./CommanderEditor.css";
import { useScaleStore } from "../../state";


export interface CommanderEditorProps {

    /**
     *  Pass a commander object to edit.
     */
    commander?: CommanderDescriptor;
    
    /**
     *  A submit callback that is called when user is happy
     *  with the commander.
     */
    onSubmit?: (commander: CommanderDescriptor) => void;

    /**
     *  A cancel callback that is called when user doesn't want
     *  to proceed with editing a commander.
     */
    onCancel?: () => void;
};

function composeCommander(state: CommanderDescriptor, action: Partial<CommanderDescriptor>) : CommanderDescriptor {
    return { ...state, ...action };
};

/**
 *  This editor allows editing a commander (for a brigade or army). The editor
 *  allows to name the commander, assign staff rating, personality, and affiliation.
 */
export function CommanderEditor({ commander, onSubmit, onCancel } : CommanderEditorProps) {

    const { t } = useTranslation();
    const { scale } = useScaleStore();
    const affiliations = useAffiliations();
    const [ currentCommander, changeCommander ] = useReducer(composeCommander, { }, () => commander || prepareCommanderData({ }));

    const handleSubmit = (data: object) => {

        onSubmit?.(prepareCommanderData({ id: commander?.id, ...data }));
    };

    const handleChange = (data: object) => {

        changeCommander(data);
    };

    const handleCancel = () => {

        onCancel?.();
    };

    return (
        <div className="commandereditor">
            <BasicForm onSubmit={handleSubmit} onChange={handleChange}>
                <datalist id="commandereditor-affiliation-suggestions">
                    {affiliations.map(a => (<option key={a} value={a}/>))}
                </datalist>
                <div className="commandereditor-firstline">
                    <WrittenField
                        name="name"
                        placeholder={String(t("commandereditor.name.placeholder"))}
                        defaultValue={currentCommander?.name}
                    />
                    <PointsBadge layout="column" points={calcCommanderCost(currentCommander)}/>
                    {onCancel && <button type="button" onClick={handleCancel}>{t("commandereditor.cancel.label")}</button>}
                    {onSubmit && <button>{t("commandereditor.save.label")}</button>}
                </div>
                <div className="commandereditor-secondline">
                    <FormField
                        label={t("commandereditor.affiliation.label")}
                        type="text"
                        name="affiliation"
                        list="commandereditor-affiliation-suggestions"
                        defaultValue={currentCommander?.affiliation}
                    />
                    <FormField
                        label={t("commandereditor.staffrating.label")}
                        type="number"
                        name="staffRating"
                        min="4"
                        max="10"
                        defaultValue={currentCommander?.staffRating || 7}
                        description={`${t(`staffrating.${currentCommander.staffRating}.label`)} - ${t(`staffrating.${currentCommander.staffRating}.description`)}`}
                    />
                    <FormField
                        label={t("commandereditor.movement.label")}
                        type="select"
                        name="move"
                        options={commanderMovementTypes}
                        labels={(o: string) => t(`commandereditor.movement.${o}.label`)}
                        defaultValue={currentCommander?.move}
                        description={t(`commandereditor.movement.${currentCommander.move}.description`, { distance: formatDistance(commanderMoveRange[currentCommander.move], scale)})}
                    />
                    <FormField
                        label={t("commandereditor.personality.label")}
                        type="select"
                        name="personality"
                        options={commanderPersonalityTypes} 
                        labels={(o: string) => t(`commander.personality.${o}.label`)} 
                        titles={(o: string) => t(`commander.personality.${o}.description`)} 
                        defaultValue={currentCommander?.personality || "blank"}
                        description={t(`commander.personality.${currentCommander.personality}.description`)}
                    />
                </div>
            </BasicForm>
        </div>
    );
};
