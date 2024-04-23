import { CommanderDescriptor } from "../../data/commanders";
import { useCommanderDescriptorsStore } from "../../state";
import { CommanderEditor, Page, Title } from "../../widgets";

export interface CommanderDialogProps {

    commander: CommanderDescriptor;
    onSubmit?: (commander: CommanderDescriptor) => void;
    onClose?: () => void;
};

export function CommanderDialog({ commander, onSubmit, onClose }: CommanderDialogProps) { 

    const commanderDescriptorsStore = useCommanderDescriptorsStore();

    const handleSubmit = (commander: CommanderDescriptor) => {

        commanderDescriptorsStore.store(commander);

        onSubmit?.(commander);
        onClose?.();
    };

    const handleCancel = () => {

        onClose?.();
    };

    return (
        <Page modal>
            <Title text="Compose commander"/>
            <CommanderEditor commander={commander} onSubmit={handleSubmit} onCancel={handleCancel}/>
        </Page>
    );
};