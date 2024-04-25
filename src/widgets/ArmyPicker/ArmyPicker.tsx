import { ArmyDescriptor } from "../../data/armies";
import { useArmyDescriptorsStore } from "../../state/armyDescriptors";
import { ArmyItem } from "./ArmyItem";

export interface ArmyPickerProps {
    onPick?: (army: ArmyDescriptor) => void;
};

export function ArmyPicker({ onPick }: ArmyPickerProps) {

    const armyDescriptorsStore = useArmyDescriptorsStore();

    const armies = Object.values(armyDescriptorsStore.descriptors);

    return (
        <div>
            {armies.map(a => <ArmyItem key={a.id} onPick={onPick} army={a}/>)}
        </div>
    );
};