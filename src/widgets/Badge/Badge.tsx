import { ReactNode } from "react";

import "./Badge.css";

export interface BadgeProps {

    children?: ReactNode;
}

export function Badge({ children }: BadgeProps) {

    return (
        <span className="badge badge-red">
            {children}
        </span>
    );
}