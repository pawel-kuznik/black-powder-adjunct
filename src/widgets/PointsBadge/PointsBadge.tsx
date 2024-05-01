import { useTranslation } from "react-i18next";
import { Badge } from "../Badge";

import "./PointsBadge.css";

export interface PointsBadgeProps {
    points: number;
    layout?: "dense" | "column" | "brick";
}

/**
 *  A specific component for showing points costs.
 */
export function PointsBadge({ points, layout = "dense" } : PointsBadgeProps) {

    const { t } = useTranslation();

    if (layout === "column") return (
        <Badge color="teal">
            <span className="pointsbadge-column">
                <strong>{points}</strong>
                <span>{t("pointsbadge.column.label")}</span>
            </span>
        </Badge>
    );

    if (layout === "brick") return (
        <Badge color="teal" padding="button">
            <span className="pointsbadge-brick">
                <strong>{points}</strong>
                <span>{t("pointsbadge.brick.label")}</span>
            </span>
        </Badge>
    );

    return (<Badge color="teal">{t("pointsbadge.dense.label", { points })}</Badge>)
};
