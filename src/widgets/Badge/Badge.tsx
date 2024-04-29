import { ReactNode } from "react";

import "./Badge.css";

export interface BadgeProps {

    children?: ReactNode;

    color?: "red" | "teal";
}

export function Badge({ children, color = "red" }: BadgeProps) {

    const css = [ "badge", `badge-${color}` ];

    return (
        <span className={css.join(" ")}>
            {children}
        </span>
    );
}