import { useTranslation } from "react-i18next";
import { ReactNode } from "react";
import { UnitDescriptor, unitMovement } from "../../data/units";
import { calcUnitCost, formatDistance } from "../../logic";
import { weaponsRange } from "../../data/weapons";
import { PointsBadge } from "../PointsBadge";
import { Flag } from "../Flag";
import { SpecialTags } from "../SpecialTags";
import { useScaleStore } from "../../state";
import { Stat } from "../Stat";

import "./UnitCard.css";


export interface UnitCardProps {

    /**
     *  The style of the unit card. It mainly tells how much space, and
     *  by that how much information, the card will present to the user.
     */
    style?: "infomative" | "dense";

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
export function UnitCard({ unit, controls, style = "infomative" }: UnitCardProps) {

    const { t } = useTranslation();
    const { scale } = useScaleStore();
    const points = calcUnitCost(unit);

    const movement = unitMovement[unit.type];
    const range = Number(weaponsRange[unit.arnament as keyof typeof weaponsRange] || 0);

    return (
        <div className="unitcard common-cardbox">
            <div className="unitcard-header">
                <Flag which={unit.affiliation}/> {unit.name} <PointsBadge layout="brick" points={points}/>
                {controls}
            </div>
            <div className="unitcard-statsrow">
                <Stat label={t("unitcard.stats.type.label")}>
                    {t(`unit-type.label.${unit.type}`)}
                </Stat>
                <Stat label={t("unitcard.stats.arnament.label")}>
                    {t(`weapon.label.${unit.arnament}`)}
                </Stat>
                <Stat label={t("unitcard.stats.movement.label")} align="center">
                    {formatDistance(movement, scale)}
                </Stat>
                <Stat label={t("unitcard.stats.handToHand.label")} align="center">
                    {unit.handToHand}
                </Stat>
                <Stat label={t("unitcard.stats.range.label")} align="center">
                    {range ? formatDistance(range, scale) : '---'}
                </Stat>
                <Stat label={t("unitcard.stats.shooting.label")} align="center">
                    {range ? (unit.shooting === "artillery" ? "3-2-1" : unit.shooting) : '---'}
                </Stat>
                <Stat label={t("unitcard.stats.morale.label")} align="center">
                    {unit.morale}+
                </Stat>
                <Stat label={t("unitcard.stats.stamina.label")} align="center">
                    {unit.stamina}
                </Stat>
            </div>
            <div className="unitcard-specialsrow">
                <Stat label={t("unitcard.stats.special.label")}>
                    <SpecialTags layout={style === "dense" ? "inline" : "list"} specials={unit.special}/>
                    {unit.special.length === 0 && "---"}
                </Stat>
            </div>
        </div>
    );
}
