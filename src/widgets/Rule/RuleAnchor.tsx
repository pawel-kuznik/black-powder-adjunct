import { ReactNode } from "react";
import { TooltipAnchor } from "../Tooltip/TooltipAnchor";
import { RuleType } from "../../data/rules";
import { RuleTooltip } from "./RuleTooltip";

export interface RuleAnchorProps {
    rule: RuleType;
    children?: ReactNode;
};

export function RuleAnchor({ rule, children }: RuleAnchorProps) {

    return (
        <TooltipAnchor tooltip={RuleTooltip} tooltipProps={{ rule }}>
            {children}
        </TooltipAnchor>
    );
};
