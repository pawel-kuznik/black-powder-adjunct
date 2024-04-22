import { UnitDescriptor } from "../../data/units";
import { calcUnitCost, calcWeaponRange } from "../../logic";
import { Badge } from "../Badge";
import { Flag } from "../Flag";
import { StatsColumns } from "../StatsColumns";

export interface UnitItemProps {
    unit: UnitDescriptor;
};

export function UnitItem({ unit } : UnitItemProps) {

    const range = calcWeaponRange(unit.arnament);

    return (
        <StatsColumns sizePreset="listing">
            <div>
                <Flag which={unit.affiliation}/> {unit.key} <Badge>{calcUnitCost(unit)} pts</Badge><br/>
                <small>{unit.type}</small>
                {unit.special.join(", ")}
            </div>
            <div>
                {unit.arnament}
            </div>
            <div>
                {unit.handToHand}
            </div>
            <div>
                {unit.shooting} {range && (<span>at {range}''</span>)}
            </div>
            <div>
                {unit.morale}+
            </div>
            <div>
                {unit.stamina}
            </div>
        </StatsColumns>
    );
}
