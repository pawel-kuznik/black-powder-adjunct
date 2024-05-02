import { UnitDescriptor } from "../../data/units";
import { Page, Title, UnitPicker, useModalControls } from "../../widgets";
import { prepareUnitData } from "../../logic";
import { UnitDialog } from "./UnitDialog";
import { useUnitDescriptorsStore } from "../../state";

export function UnitsPage() {
    const { show } = useModalControls();
    const unitDescriptorsStore = useUnitDescriptorsStore();


    const handlePick = (unit: UnitDescriptor) => {
        console.log("unit", unit);
        show("edit-unit", UnitDialog, { unit });
    };

    const handleRemove = (unit: UnitDescriptor) => {
        unitDescriptorsStore.remove(unit);
    };

    const handleNewUnitClick = () => {

        show("edit-unit", UnitDialog, { unit: prepareUnitData({ }) });
    };

    return (
        <Page>
            <Title text="Units"/>
            <button type="button" onClick={handleNewUnitClick}>Create new</button>
            <UnitPicker onPick={handlePick} onRemove={handleRemove}/>
        </Page>
    );
};