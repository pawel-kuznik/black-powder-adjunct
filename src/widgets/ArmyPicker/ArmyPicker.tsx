import { ArmyDescriptor } from "../../data/armies";
import { useArmyDescriptorsStore } from "../../state/armyDescriptors";
import { CardsList } from "../CardsList";
import { ArmyItem } from "./ArmyItem";

export interface ArmyPickerProps {
    onPick?: (army: ArmyDescriptor) => void;
    onView?: (army: ArmyDescriptor) => void;
    onRemove?: (army: ArmyDescriptor) => void;
};

export function ArmyPicker({ onPick, onView, onRemove }: ArmyPickerProps) {

    const armyDescriptorsStore = useArmyDescriptorsStore();

    const armies = Object.values(armyDescriptorsStore.descriptors);

    return (
        <CardsList>
            {armies.map(a => (
                <ArmyItem key={a.id} onPick={onPick} onView={onView} onRemove={onRemove} army={a}/>
            ))}
        </CardsList>
    );
};