import { ReactNode } from "react";
import { CommanderDescriptor, commanderMoveRange } from "../../data/commanders";
import { calcCommanderCost, formatDistance } from "../../logic";
import { Flag } from "../Flag";
import { PointsBadge } from "../PointsBadge";
import { useTranslation } from "react-i18next";

import "./CommanderCard.css";
import { useScaleStore } from "../../state";
import { Stat } from "../Stat";

export interface CommanderCardProps {

    /**
     *  The commander to show.
     */
    commander: CommanderDescriptor;

    /**
     *  Additional react node that is supposed to hold controls
     *  over the commander. This can be used in editors and lists
     *  to remove or edit a commander.
     */
    controls?: ReactNode;
};

/**
 *  This is a component to show a commander information to the user.
 */
export function CommanderCard({ commander, controls }: CommanderCardProps) {

    const { t } = useTranslation();
    const { scale } = useScaleStore();

    const points = calcCommanderCost(commander);
    const movement = commanderMoveRange[commander.move];

    return (
        <div className="commandercard common-cardbox">
            <div className="commandercard-header">
                <Flag which={commander.affiliation}/>
                <span>{commander.name}</span>
                <PointsBadge layout="brick" points={points}/>
                {controls}
            </div>
            <div className="commandercard-stats">
                <Stat label={t("commandercard.staffrating.label")}>
                    {commander.staffRating} - {t(`staffrating.${commander.staffRating}.label`)}
                </Stat>
                <Stat label={t("commandercard.movement.label")} align="center">
                    {formatDistance(movement, scale)}
                </Stat>
                <Stat label={t("commandercard.personality.label")}>
                    {t(`commander.personality.${commander.personality}.label`)} - {t(`commander.personality.${commander.personality}.description`)}
                </Stat>
            </div>
            <div className="commandercard-personality">
                
            </div>
        </div>
    );
}