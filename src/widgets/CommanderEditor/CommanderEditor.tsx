import { commanderMovementTypes, commanderPersonalityTypes } from "../../data/commanders";
import { prepareCommanderData } from "../../logic";
import { useCommanderDescriptorsStore } from "../../state";
import { BasicForm } from "../BasicForm";
import { FormField } from "../FormField";
import { WrittenField } from "../WrittenField";

/**
 *  This editor allows editing a commander (for a brigade or army).
 */
export function CommanderEditor() {

    const commandersStore = useCommanderDescriptorsStore();

    const handleSubmit = (data: object) => {

        commandersStore.store(prepareCommanderData(data));
    };

    return (
        <BasicForm onSubmit={handleSubmit}>
            <WrittenField name="name"/>
            <FormField label="Staff rating" type="number" name="staffRating"/>
            <FormField label="Movement" type="select" name="move" options={commanderMovementTypes} labels={(o: string) => o}/>
            <FormField label="Personality" type="select" name="personality" options={commanderPersonalityTypes} labels={(o: string) => o}/>
            <button>Save</button>
        </BasicForm>
    );
};
