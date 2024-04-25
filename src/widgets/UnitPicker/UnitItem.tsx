import { useTranslation } from "react-i18next";
import { UnitDescriptor } from "../../data/units";
import { calcUnitCost, calcWeaponRange } from "../../logic";
import { Badge } from "../Badge";
import { Flag } from "../Flag";
import { SpecialTags } from "../SpecialTags";
import { StatsColumns } from "../StatsColumns";

import "./UnitItem.css";

export interface UnitItemProps {
    unit: UnitDescriptor;
    onPick?: (unit: UnitDescriptor) => void;
    onRemove?: (unit: UnitDescriptor) => void;
};

export function UnitItem({ unit, onPick, onRemove } : UnitItemProps) {

    const { t } = useTranslation();
    const range = calcWeaponRange(unit.arnament);

    const handlePickClick = () => {
        onPick?.(unit);
    };

    const handleRemoveClick = () => {
        onRemove?.(unit);
    };

    return (
        <div className="unitpicker-unititem">
            {(onPick || onRemove) && (
                <div className="unitpicker-unititem-controls">
                    {onPick && (<button type="button" onClick={handlePickClick}>Pick</button>)}
                    {onRemove && (<button type="button" onClick={handleRemoveClick}>Remove</button>)}
                </div>
            )}
            <StatsColumns sizePreset="listing">
                <div className="unitpicker-unititem-name">
                    <Flag which={unit.affiliation}/> {unit.key} <small>{t(`unit-type.label.${unit.type}`)}</small> <Badge>{calcUnitCost(unit)} pts</Badge><br/>
                    <SpecialTags specials={unit.special}/>
                </div>
                <div className="unitpicker-unititem-arnament">
                    {t(`weapon.label.${unit.arnament}`)}
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
