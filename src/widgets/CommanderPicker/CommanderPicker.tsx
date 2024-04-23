import { CommanderDescriptor } from "../../data/commanders";
import { useCommanderDescriptorsStore } from "../../state";
import { ColumnsHeader } from "./ColumnsHeader";
import { CommanderItem } from "./CommanderItem";

export interface CommanderPickerProps {

    onPick?: (commander: CommanderDescriptor) => void;
    onRemove?: (commander: CommanderDescriptor) => void;
};

export function CommanderPicker({ onPick, onRemove } : CommanderPickerProps) {

    const commanderDescriptorsStore = useCommanderDescriptorsStore();

    const descriptors = Object.values(commanderDescriptorsStore.descriptors);

    return (
        <div>
            <ColumnsHeader/>
            {descriptors.map(c => (<CommanderItem key={c.name} commander={c} onPick={onPick} onRemove={onRemove}/>))}
        </div>
    );
};
