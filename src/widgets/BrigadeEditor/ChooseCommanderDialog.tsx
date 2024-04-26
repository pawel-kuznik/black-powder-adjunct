import { useTranslation } from "react-i18next";
import { CommanderDescriptor } from "../../data/commanders";
import { CommanderPicker } from "../CommanderPicker";
import { Page } from "../Page";
import { Title } from "../Title";
import { CreateCommanderDialog } from "./CreateCommanderDialog";
import { useModalControls } from "../Modal";

export interface ChooseCommanderDialog {

    onPick: (commander: CommanderDescriptor) => void;
    onClose: () => void;
};

/**
 *  This is a component that allows user to pick a commander of a brigade.
 *  This component also allows for creation of a new commander by clicking
 *  a create button and launching a new dialog to create the commander.
 */
export function ChooseCommanderDialog({ onPick, onClose } : ChooseCommanderDialog) {

    const { t } = useTranslation()
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

        show("brigadeeditor-createcommander", CreateCommanderDialog, { onCreate: handleCreate });
    };

    return (
        <Page modal>
            <Title text={t("brigadeeditor.choosecommanderdialog.title")}/>
            <button onClick={handleCancel}>{t("brigadeeditor.choosecommanderdialog.cancel.label")}</button>
            <button onClick={handleCreateClick}>{t("brigadeeditor.choosecommanderdialog.create.label")}</button>
            <CommanderPicker onPick={handlePick}/>
        </Page>
    );
};