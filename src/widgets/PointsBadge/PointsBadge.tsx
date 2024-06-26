import { useTranslation } from "react-i18next";
import { Badge } from "../Badge";

import "./PointsBadge.css";
import { useEffect, useState } from "react";

export interface PointsBadgeProps {
    points: number;
    layout?: "dense" | "column" | "brick";
}

const numberChangeSpeed = 7;

/**
 *  A specific component for showing points costs.
 */
export function PointsBadge({ points, layout = "dense" } : PointsBadgeProps) {

    const { t } = useTranslation();

    const [ currentPoints, setCurrentPoints ] = useState<number>(() => points);
    const [ timer, setTimer ] = useState<number>(-1);

    // this useEffect sets the currently displayed points to passed
    // value on component mount. This makes sure that we don't animate
    // the points value when the initial component is shown and the user
    // can see the correct point value immediately.
    useEffect(() => {

        setCurrentPoints(points);

        return () => {
            if (timer !== -1) clearTimeout(timer);
        };
    }, []);

    // this useEffect creates an animation of the points value so that when
    // the passed points change, it will be visible for the user.
    useEffect(() => {

        if (points === currentPoints) return;

        const t = setTimeout(() => {

            const diff = points - currentPoints;

            // we need to clear our state and the timeout in both cases: we need to update
            // or we are already in equalibrum
            clearTimeout(timer);
            setTimer(-1);

            if (diff === 0) return;

            setCurrentPoints(currentPoints + Math.max(Math.min(diff, numberChangeSpeed), -numberChangeSpeed));
        }, 50);

        // we cast the timer id (which is returned from the setTimeout function) to unknown
        // and then to a number cause the types of node.js Timeout is leaking. Node.js also
        // has setTimeout, setInterval, and clearTimeout function which operates on instances
        // of Timeout instead of timer ids. Configuration that vite comes with allows for this
        // leak and at the moment of writing of this comment, I don't wanna fix configs to
        // make this specifi line look nicer.
        setTimer(t as unknown as number);

    }, [ points, currentPoints, setCurrentPoints ]);

 
    if (layout === "column") return (
        <Badge color="teal">
            <span className="pointsbadge-column">
                <strong>{currentPoints}</strong>
                <span>{t("pointsbadge.column.label")}</span>
            </span>
        </Badge>
    );

    if (layout === "brick") return (
        <Badge color="teal" padding="button">
            <span className="pointsbadge-brick">
                <strong>{currentPoints}</strong>
                <span>{t("pointsbadge.brick.label")}</span>
            </span>
        </Badge>
    );

    return (<Badge color="teal">{t("pointsbadge.dense.label", { points: currentPoints })}</Badge>)
};
