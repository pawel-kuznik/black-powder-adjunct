import { ReactNode } from "react";

import "./Badge.css";

export interface BadgeProps {

    children?: ReactNode;

    color?: "red" | "teal";

    padding?: "badge" | "button";
}

export function Badge({ children, padding = "badge", color = "red" }: BadgeProps) {

    const css = [ "badge", `badge-${color}`, `badge-padding-${padding}` ];

    return (
        <span className={css.join(" ")}>
            {children}
        </span>
    );
}