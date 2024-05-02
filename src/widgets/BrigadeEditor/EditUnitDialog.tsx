import { useTranslation } from "react-i18next";
import { UnitDescriptor } from "../../data/units";
import { Page } from "../Page";
import { Title } from "../Title";
import { UnitEditor } from "../UnitEditor";

export interface EditUnitDialogProps {

    unit: UnitDescriptor;

    onClose: () => void;

    onSubmit: (unit: UnitDescriptor) => void;
};

export function EditUnitDialog({ unit, onSubmit, onClose } : EditUnitDialogProps) {

    const { t } = useTranslation();

    const handleSubmit = (unit: UnitDescriptor) => {

        onSubmit(unit);
        onClose();
    };

    return (
        <Page modal>
            <Title text={t("brigadeeditor.editunitdialog.title.text")}/>
            <UnitEditor unit={unit} onCancel={onClose} onSubmit={handleSubmit}/>
        </Page>
    );
};  