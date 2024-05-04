import { FunctionComponent, ReactNode, useEffect, useState } from "react";
import { TooltipProps } from "./Tooltip";

const lockTimeout = 1200;

export interface TooltipAnchorProps {
    tooltip: FunctionComponent<TooltipProps>;
    children: ReactNode;
};

export function TooltipAnchor({ children, tooltip } : TooltipAnchorProps) {

    const [ timer, setTimer ] = useState<ReturnType<typeof window.setTimeout>>();
    const [ showing, setShowing ] = useState<boolean>(false);
    const [ locked, setLocked ] = useState<boolean>(false);

    useEffect(() => {

        return () => {
            if (timer) clearTimeout(timer);
            setTimer(undefined);
        }
    }, [ ]);

    const handleEnter = () => {

        setShowing(true);

        const timer = setTimeout(() => {

            setLocked(true);
            setTimer(undefined);
        }, lockTimeout);

        setTimer(timer);
    };

    const handleLeave = () => {

        clearTimeout(timer);
        setTimer(undefined);

        if (!locked) setShowing(false);
    };

    const handleDismiss = () => {

        clearTimeout(timer);
        setTimer(undefined);
        setShowing(false);
        setLocked(false);
    };

    const TooltipComponent = tooltip;

    return (
        <span onPointerEnter={handleEnter} onPointerLeave={handleLeave}>
            {children}
            {showing && <TooltipComponent locked={locked} onDismiss={handleDismiss}/>}
        </span>
    );
};