import { useTranslation } from "react-i18next";
import { BasicForm, Button, JSONField, Page, Title } from "../../widgets";
import { useUnitDescriptorsStore } from "../../state";

export interface DataManagementDialogProps {

    onClose: () => void;
};

/**
 *  This component allows management of data of stored units.
 */
export function DataManagementDialog({ onClose }: DataManagementDialogProps ) {

    const { t } = useTranslation();

    const unitsStore = useUnitDescriptorsStore();
    const unitsData = JSON.stringify(unitsStore.descriptors, null, 4);

    const handleSubmit = (data: object) => {

        if (!("state" in data)) return;

        try {
            unitsStore.replaceAll(JSON.parse(data.state as string));
        }

        catch (e)
        {
            alert("INVALID JSON");
        }
    };

    const handleClose = () => {
        onClose();
    };

    const handleRestore = () => {
        unitsStore.restoreDefaults();
    };

    const handlePurge = () => {
        unitsStore.replaceAll({ });
    };

    const controls = (
        <>
            <Button label={t("unitspage.datamanagementdialog.import-data.label")}/>
            <Button submit={false} label={t("unitspage.datamanagementdialog.restore-data.label")} onClick={handleRestore}/>
            <Button submit={false} label={t("unitspage.datamanagementdialog.purge-data.label")} onClick={handlePurge}/>
            <Button submit={false} label={t("unitspage.datamanagementdialog.close.label")} onClick={handleClose} style="red"/>
        </>
    );

    return (
        <Page modal>
            <BasicForm onSubmit={handleSubmit}>
                <Title text={t("unitspage.datamanagementdialog.title")} controls={controls}/>
                <p>{t("unitspage.datamanagementdialog.explanation.0")}</p>
                <p>{t("unitspage.datamanagementdialog.explanation.1")}</p>
                <JSONField label={t("unitspage.datamanagementdialog.current-state.label")} name="state" defaultValue={unitsData}/>
            </BasicForm>
        </Page>
    );
};