import { ReactNode } from "react";
import { ArmyDescriptor } from "../../data/armies";
import { calcArmyCost } from "../../logic";
import { PointsBadge } from "../PointsBadge";

import "./ArmyCard.css";

export interface ArmyCardProps {

    /**
     *  The army to show.
     */
    army: ArmyDescriptor;

    /**
     *  The additional controls that should be inserted inside the army card.
     */
    controls?: ReactNode;
};

export function ArmyCard({ army, controls } : ArmyCardProps) {
    
    const points = calcArmyCost(army);
    
    return (
        <div className="armycard common-cardbox">
            <span>
                {army.name}
            </span>
            <PointsBadge layout="column" points={points} />
            {controls}
        </div>
    );
};
