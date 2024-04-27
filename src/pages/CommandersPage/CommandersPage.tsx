import { CommanderDescriptor } from "../../data/commanders";
import { useCommanderDescriptorsStore } from "../../state";
import { CommanderPicker, Page, Title, useModalControls } from "../../widgets";
import { CommanderDialog } from "./CommanderDialog";

export function CommandersPage() {

    const { show } = useModalControls();
    const commanderDescriptorsStore = useCommanderDescriptorsStore();

    const handlePick = (commander: CommanderDescriptor) => {

        show("edit-commander", CommanderDialog, { commander });
    };

    const handleNewCommanderClick = () => {

        show("edit-commander", CommanderDialog, { });
    };

    const handleRemove = (commander: CommanderDescriptor) => {

        commanderDescriptorsStore.remove(commander);
    };

    return (
        <Page>
            <Title text="Commanders"/>
            <button type="button" onClick={handleNewCommanderClick}>Create new</button>
            <CommanderPicker onPick={handlePick} onRemove={handleRemove}/>
        </Page>
    )
};