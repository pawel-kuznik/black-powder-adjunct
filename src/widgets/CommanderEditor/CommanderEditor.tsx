import { useTranslation } from "react-i18next";
import { CommanderDescriptor, commanderMovementTypes, commanderPersonalityTypes } from "../../data/commanders";
import { prepareCommanderData } from "../../logic";
import { BasicForm } from "../BasicForm";
import { FormField } from "../FormField";
import { WrittenField } from "../WrittenField";
import { useAffiliations } from "../../state/useAffiliations";

export interface CommanderEditorProps {

    commander?: CommanderDescriptor;
    onSubmit?: (commander: CommanderDescriptor) => void;
    onCancel?: () => void;
};

/**
 *  This editor allows editing a commander (for a brigade or army). The editor
 *  allows to name the commander, assign staff rating, personality, and affiliation.
 */
export function CommanderEditor({ commander, onSubmit, onCancel } : CommanderEditorProps) {

    const { t } = useTranslation();
    const affiliations = useAffiliations();

    const handleSubmit = (data: object) => {

        onSubmit?.(prepareCommanderData({ id: commander?.id, ...data }));
    };

    const handleCancel = () => {
        onCancel?.();
    };

    return (
        <BasicForm onSubmit={handleSubmit}>
            <datalist id="commandereditor-affiliation-suggestions">
                {affiliations.map(a => (<option key={a} value={a}/>))}
            </datalist>
            <WrittenField name="name" defaultValue={commander?.name}/>
            <FormField label="Staff rating" type="number" name="staffRating" defaultValue={commander?.staffRating}/>
            <FormField label="Movement" type="select" name="move" options={commanderMovementTypes} labels={(o: string) => o} defaultValue={commander?.move}/>
            <FormField label="Affiliation" type="text" name="affiliation" list="commandereditor-affiliation-suggestions"/>
            <FormField label="Personality" type="select" name="personality" options={commanderPersonalityTypes} labels={(o: string) => o} defaultValue={commander?.personality}/>
            {onCancel && <button type="button" onClick={handleCancel}>{t("commandereditor.cancel.cancel")}</button>}
            <button>{t("commandereditor.save.cancel")}</button>
        </BasicForm>
    );
};
