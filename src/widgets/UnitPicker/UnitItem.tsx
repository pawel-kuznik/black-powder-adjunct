import { UnitDescriptor } from "../../data/units";
import { calcUnitCost, calcWeaponRange } from "../../logic";
import { Badge } from "../Badge";
import { Flag } from "../Flag";
import { StatsColumns } from "../StatsColumns";

import "./UnitItem.css";

export interface UnitItemProps {
    unit: UnitDescriptor;
    onPick?: (unit: UnitDescriptor) => void;
};

export function UnitItem({ unit, onPick } : UnitItemProps) {

    const range = calcWeaponRange(unit.arnament);

    const handleClick = () => {

        onPick?.(unit);
    };

    return (
        <div className="unitpicker-unititem" onClick={handleClick}>
            <StatsColumns sizePreset="listing">
                <div className="unitpicker-unititem-name">
                    <Flag which={unit.affiliation}/> {unit.key} <small>{unit.type}</small> <Badge>{calcUnitCost(unit)} pts</Badge><br/>
                    {unit.special.join(", ")}
                </div>
                <div className="unitpicker-unititem-arnament">
                    {unit.arnament}
                </div>
                <div className="unitpicker-unititem-arnament">
                    {unit.handToHand}
                </div>
                <div className="unitpicker-unititem-number">
                    {unit.shooting} {range ? (<span>at {range}''</span>) : ''}
                </div>
                <div className="unitpicker-unititem-number">
                    {unit.morale}+
                </div>
                <div className="unitpicker-unititem-number">
                    {unit.stamina}
                </div>
            </StatsColumns>
        </div>
    );
}
