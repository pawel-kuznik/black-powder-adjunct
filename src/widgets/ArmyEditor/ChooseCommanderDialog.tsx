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

    return (
        <Page modal>
            <Title text="Choose commander"/>
            <CommanderPicker onPick={handlePick}/>
        </Page>
    );
};