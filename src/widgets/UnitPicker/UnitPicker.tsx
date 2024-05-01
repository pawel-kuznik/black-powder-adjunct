import { UnitDescriptor } from "../../data/units";
import { useUnitDescriptorsStore } from "../../state";
import { CardsList } from "../CardsList";
import { UnitItem } from "./UnitItem";

export interface UnitPickerProps {

    onPick?: (model: UnitDescriptor) => void;
    onRemove?: (model: UnitDescriptor) => void;
};

export function UnitPicker({ onPick, onRemove } : UnitPickerProps) {

    const unitDescriptorStore = useUnitDescriptorsStore();

    const descriptors = Object.values(unitDescriptorStore.descriptors);

    return (
        <CardsList>
            {descriptors.map(u => (<UnitItem key={u.id} unit={u} onPick={onPick} onRemove={onRemove}/>))}
        </CardsList>
    );
}
