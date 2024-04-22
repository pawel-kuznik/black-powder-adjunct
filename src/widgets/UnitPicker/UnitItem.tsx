import { UnitDescriptor } from "../../data/units";
import { calcUnitCost } from "../../logic";
import { Flag } from "../Flag";
import { StatsColumns } from "../StatsColumns";

export interface UnitItemProps {
    unit: UnitDescriptor;
};

export function UnitItem({ unit } : UnitItemProps) {

    return (
        <StatsColumns>
            <div>
                <Flag which={unit.affiliation}/> {unit.key} ({calcUnitCost(unit)})<br/>
                <small>{unit.type}</small>
            </div>
            <div>
                {unit.arnament}
            </div>
            <div>
                {unit.handToHand}
            </div>
            <div>
                {unit.morale}
            </div>
            <div>
                {unit.shooting}
            </div>
            <div>
                {unit.stamina}
            </div>
            <div>
                {unit.special.join(", ")}
            </div>
        </StatsColumns>
    );
}
