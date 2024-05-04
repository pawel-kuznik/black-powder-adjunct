import { ReactNode } from "react";

import "./Tooltip.css";

export interface TooltipProps {

    locked: boolean;

    onDismiss: () => void;

    children?: ReactNode;
};

export function Tooltip({ locked, onDismiss, children }: TooltipProps) {

    const css = [ 'tooltip' ];
    if (locked) css.push('tooltip-locked');

    const handleLeave = () => {
        onDismiss();
    };

    return (
        <div className={css.join(" ")} onPointerLeave={handleLeave}>
            <div className="tooltip-contents">
                {children}
            </div>
            {!locked && <div className="tooltip-locker"></div>}
        </div>
    );
};