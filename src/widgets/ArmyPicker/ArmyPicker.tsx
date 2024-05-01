import { ArmyDescriptor } from "../../data/armies";
import { useArmyDescriptorsStore } from "../../state/armyDescriptors";
import { CardsList } from "../CardsList";
import { ArmyItem } from "./ArmyItem";

export interface ArmyPickerProps {
    onPick?: (army: ArmyDescriptor) => void;
    onRemove?: (army: ArmyDescriptor) => void;
};

export function ArmyPicker({ onPick, onRemove }: ArmyPickerProps) {

    const armyDescriptorsStore = useArmyDescriptorsStore();

    const armies = Object.values(armyDescriptorsStore.descriptors);

    return (
        <CardsList>
            {armies.map(a => (
                <ArmyItem key={a.id} onPick={onPick} onRemove={onRemove} army={a}/>
            ))}
        </CardsList>
    );
};