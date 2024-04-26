import { CommanderDescriptor } from "../../data/commanders";
import { CommanderPicker } from "../CommanderPicker";
import { Page } from "../Page";
import { Title } from "../Title";

export interface ChooseCommanderDialog {

    onPick: (commander: CommanderDescriptor) => void;
    onClose: () => void;
};

export function ChooseCommanderDialog({ onPick, onClose } : ChooseCommanderDialog) {

    const handlePick = (commander: CommanderDescriptor) => {

        onPick(commander);
        onClose();
    };

    const handleCancel = () => {
        onClose();
    };

    return (
        <Page modal>
            <Title text="Choose commander"/>
            <button onClick={handleCancel}>Cancel</button>
            <CommanderPicker onPick={handlePick}/>
        </Page>
    );
};