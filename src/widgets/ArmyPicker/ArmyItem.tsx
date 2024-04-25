import { ArmyDescriptor } from "../../data/armies";
import { calcArmyCost } from "../../logic";
import { Badge } from "../Badge";

export interface ArmyItemProps {
    army: ArmyDescriptor;
    onPick?: (army: ArmyDescriptor) => void;
};

export function ArmyItem({ army, onPick } : ArmyItemProps) {

    const handleClick = () => {
        onPick?.(army);
    };

    const points = calcArmyCost(army);
    
    return (
        <div onClick={handleClick}>
            {army.name}
            <Badge>{points} pts</Badge>
        </div>
    );
};