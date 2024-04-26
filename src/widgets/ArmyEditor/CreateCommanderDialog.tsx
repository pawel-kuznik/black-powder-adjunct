import { useTranslation } from "react-i18next";
import { CommanderDescriptor } from "../../data/commanders";
import { Page } from "../Page";
import { Title } from "../Title";
import { CommanderEditor } from "../CommanderEditor";

export interface CreateCommanderDialogProps {

    onCreate: (commander: CommanderDescriptor) => void;
    onClose: () => void;
};

export function CreateCommanderDialog({ onCreate, onClose } : CreateCommanderDialogProps) {

    const { t } = useTranslation();

    const handleSubmit = (commander: CommanderDescriptor) => {
        onCreate(commander);
        onClose();
    };

    const handleCancel = () => {
        onClose();
    };

    return (
        <Page modal>
            <Title text={t("armyeditor.createcommanderdialog.title")}/>
            <CommanderEditor onSubmit={handleSubmit} onCancel={handleCancel}/>
        </Page>
    )
};
