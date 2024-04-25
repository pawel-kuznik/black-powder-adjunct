import { ReactNode } from "react";

import "./ControlsWrapper.css";

export interface ControlsWrapperProps {

    left?: ReactNode;
    right?: ReactNode;
    children: ReactNode;
};

export function ControlsWrapper({ left, right, children }: ControlsWrapperProps) {

    return (
        <div className="controlswrapper">
            {left && <div className="controlswrapper-left">{left}</div>}
            <div className="controlswrapper-center">{children}</div>
            {right && <div className="controlswrapper-right">{right}</div>}
        </div>
    );
};
