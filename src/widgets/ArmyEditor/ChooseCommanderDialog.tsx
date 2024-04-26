import { useTranslation } from "react-i18next";
import { CommanderDescriptor } from "../../data/commanders";
import { CommanderPicker } from "../CommanderPicker";
import { Page } from "../Page";
import { Title } from "../Title";
import { useModalControls } from "../Modal";
import { CreateCommanderDialog } from "./CreateCommanderDialog";

export interface ChooseCommanderDialog {

    onPick: (commander: CommanderDescriptor) => void;
    onClose: () => void;
};

/**
 *  This is a component that allows for picking a commander for an army.
 *  The component also allows for creation of a new commander by launching
 *  a new dialog after a create button is clicked.
 */
export function ChooseCommanderDialog({ onPick, onClose } : ChooseCommanderDialog) {

    const { t } = useTranslation();
    const { show } = useModalControls();

    const handlePick = (commander: CommanderDescriptor) => {

        onPick(commander);
        onClose();
    };

    const handleCancel = () => {
        onClose();
    };

    const handleCreate = (commander: CommanderDescriptor) => {
        onPick(commander);
        onClose();
    };

    const handleCreateClick = () => {

        show("armyeditor-createcommander", CreateCommanderDialog, { onCreate: handleCreate });
    };

    return (
        <Page modal>
            <Title text={t("armyeditor.choosecommanderdialog.title")}/>
            <button onClick={handleCancel}>{t("armyeditor.choosecommanderdialog.cancel.label")}</button>
            <button onClick={handleCreateClick}>{t("armyeditor.choosecommanderdialog.create.label")}</button>
            <CommanderPicker onPick={handlePick}/>
        </Page>
    );
};