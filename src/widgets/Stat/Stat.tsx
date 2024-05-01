import { ReactNode } from "react";
import "./Stat.css";

export interface StatProps {

    /**
     *  Alignment of the stat.
     */
    align?: "left" | "center" | "right";

    /**
     *  The label of the stat.
     */
    label: string;

    /**
     *  The contents of the stat.
     */
    children: ReactNode;
};

export function Stat({ label, align = "left", children }: StatProps) {

    const css = [ "stat", `stat-align-${align}` ];

    return (
        <div className={css.join(" ")}>
            <div className="stat-label">{label}</div>
            <div className="stat-contents">{children}</div>
        </div>
    );
};