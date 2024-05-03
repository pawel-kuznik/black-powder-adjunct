import { UnitDescriptor } from "../../data/units";
import { Button, Page, Title, UnitPicker, useModalControls } from "../../widgets";
import { prepareUnitData } from "../../logic";
import { UnitDialog } from "./UnitDialog";
import { useUnitDescriptorsStore } from "../../state";
import { useTranslation } from "react-i18next";
import { DataManagementDialog } from "./DataManagementDialog";

export function UnitsPage() {

    const { t } = useTranslation();
    const { show } = useModalControls();
    const unitDescriptorsStore = useUnitDescriptorsStore();

    const handlePick = (unit: UnitDescriptor) => {
        show("edit-unit", UnitDialog, { unit });
    };

    const handleRemove = (unit: UnitDescriptor) => {
        unitDescriptorsStore.remove(unit);
    };

    const handleNewUnitClick = () => {
        show("edit-unit", UnitDialog, { unit: prepareUnitData({ }) });
    };

    const handleManageData = () => {
        show("manage-data", DataManagementDialog, { });
    };

    const controls = (
        <>
            <Button submit={false} label={t("unitspage.manage-data.label")} onClick={handleManageData}/>
            <Button submit={false} label={t("unitspage.create-unit.label")} onClick={handleNewUnitClick}/>
        </>
    );

    return (
        <Page>
            <Title text="Units" controls={controls}/>
            <UnitPicker onPick={handlePick} onRemove={handleRemove}/>
        </Page>
    );
};