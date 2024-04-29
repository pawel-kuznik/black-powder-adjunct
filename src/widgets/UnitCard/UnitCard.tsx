import { useTranslation } from "react-i18next";
import { ReactNode } from "react";
import { UnitDescriptor, unitMovement } from "../../data/units";
import { calcUnitCost, formatDistance } from "../../logic";
import { weaponsRange } from "../../data/weapons";
import { PointsBadge } from "../PointsBadge";
import { Flag } from "../Flag";
import { SpecialTags } from "../SpecialTags";

import "./UnitCard.css";
import { useScaleStore } from "../../state";

export interface UnitCardProps {

    /**
     *  The unit to show in the card
     */
    unit: UnitDescriptor;

    /**
     *  Additional react node that is supposed to hold controls over
     *  the unit card. This can be used inside lists of units to add
     *  buttons to remove or edit units.
     */
    controls?: ReactNode;
};

/**
 *  This is a component that should be used to present unit information.
 */
export function UnitCard({ unit, controls }: UnitCardProps) {

    const { t } = useTranslation();
    const { scale } = useScaleStore();
    const points = calcUnitCost(unit);

    const movement = unitMovement[unit.type];
    const range = Number(weaponsRange[unit.arnament as keyof typeof weaponsRange] || 0);

    return (
        <div className="unitcard">
            <div className="unitcard-header">
                <Flag which={unit.affiliation}/> {unit.name} <PointsBadge points={points}/>
                {controls && <div className="unitcard-controls">{controls}</div>}
            </div>
            <div className="unitcard-statsheader">
                <div>
                    {t("unitcard.stats.type.label")}
                </div>
                <div>
                    {t("unitcard.stats.arnament.label")}
                </div>
                <div>
                    {t("unitcard.stats.movement.label")}
                </div>
                <div>
                    {t("unitcard.stats.handToHand.label")}
                </div>
                <div>
                    {t("unitcard.stats.range.label")}
                </div>
                <div>
                    {t("unitcard.stats.shooting.label")}
                </div>
                <div>
                    {t("unitcard.stats.morale.label")}
                </div>
                <div>
                    {t("unitcard.stats.stamina.label")}
                </div>
            </div>
            <div className="unitcard-statsrow">
                <div>
                    {t(`unit-type.label.${unit.type}`)}
                </div>
                <div>
                    {t(`weapon.label.${unit.arnament}`)}
                </div>
                <div>
                    {formatDistance(movement, scale)}
                </div>
                <div>
                    {unit.handToHand}
                </div>
                <div>
                    {range ? formatDistance(range, scale) : '---'}
                </div>
                <div>
                    {range ? (unit.shooting === "artillery" ? "3-2-1" : unit.shooting) : '---'}
                </div>
                <div>
                    {unit.morale}+
                </div>
                <div>
                    {unit.stamina}
                </div>
            </div>
            <div className="unitcard-specialsrow">
                <strong>{t("unitcard.stats.special.label")}</strong>
                <SpecialTags layout="list" specials={unit.special}/>
                {unit.special.length === 0 && "---"}
            </div>
        </div>
    );
}
