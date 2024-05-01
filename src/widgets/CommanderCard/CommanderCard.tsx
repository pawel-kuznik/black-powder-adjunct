import { ReactNode } from "react";
import { CommanderDescriptor, commanderMoveRange } from "../../data/commanders";
import { calcCommanderCost, formatDistance } from "../../logic";
import { Flag } from "../Flag";
import { PointsBadge } from "../PointsBadge";
import { useTranslation } from "react-i18next";

import "./CommanderCard.css";
import { useScaleStore } from "../../state";

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
                <PointsBadge layout="column" points={points}/>
                {controls}
            </div>
            <div className="commandercard-stats">
                <div>
                    <strong>{t("commandercard.staffrating.label")}</strong>
                    <span>{commander.staffRating} - {t(`staffrating.${commander.staffRating}.label`)}</span>
                </div>
                <div>
                    <strong>{t("commandercard.movement.label")}</strong>
                    <span>{formatDistance(movement, scale)}</span>
                </div>
            </div>
            <div className="commandercard-personality">
                <strong>{t("commandercard.personality.label")}</strong>
                {t(`commander.personality.${commander.personality}.label`)} - {t(`commander.personality.${commander.personality}.description`)}
            </div>
        </div>
    );
}