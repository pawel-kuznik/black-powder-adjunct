import { CommanderDescriptor, commanderMovementTypes, commanderPersonalityTypes } from "../../data/commanders";
import { prepareCommanderData } from "../../logic";
import { BasicForm } from "../BasicForm";
import { FormField } from "../FormField";
import { WrittenField } from "../WrittenField";

export interface CommanderEditorProps {

    commander?: CommanderDescriptor;
    onSubmit?: (commander: CommanderDescriptor) => void;
    onCancel?: () => void;
};

/**
 *  This editor allows editing a commander (for a brigade or army).
 */
export function CommanderEditor({ commander, onSubmit, onCancel } : CommanderEditorProps) {

    const handleSubmit = (data: object) => {

        onSubmit?.(prepareCommanderData(data));
    };

    const handleCancel = () => {
        onCancel?.();
    };

    return (
        <BasicForm onSubmit={handleSubmit}>
            <WrittenField name="name" defaultValue={commander?.name}/>
            <FormField label="Staff rating" type="number" name="staffRating" defaultValue={commander?.staffRating}/>
            <FormField label="Movement" type="select" name="move" options={commanderMovementTypes} labels={(o: string) => o} defaultValue={commander?.move}/>
            <FormField label="Personality" type="select" name="personality" options={commanderPersonalityTypes} labels={(o: string) => o} defaultValue={commander?.personality}/>
            {onCancel && <button type="button" onClick={handleCancel}>Cancel</button>}
            <button>Save</button>
        </BasicForm>
    );
};
