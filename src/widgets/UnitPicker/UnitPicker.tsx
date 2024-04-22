import { useUnitDescriptorsStore } from "../../state";
import { ColumnsHeader } from "./ColumnsHeader";
import { UnitItem } from "./UnitItem";

export function UnitPicker() {

    const unitDescriptorStore = useUnitDescriptorsStore();

    const descriptors = Object.values(unitDescriptorStore.descriptors);

    return (
        <div>
            <ColumnsHeader/>
            {descriptors.map(u => (<UnitItem key={u.key} unit={u}/>))}
        </div>
    );
}
