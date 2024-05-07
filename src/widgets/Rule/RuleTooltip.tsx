import { RuleType } from "../../data/rules";
import { Tooltip, TooltipProps } from "../Tooltip";
import { Rule } from "./Rule";

export interface RuleToolProps extends TooltipProps {
    rule: RuleType;
};

export function RuleTooltip({ rule, ...tooltipProps } : RuleToolProps) {

    return (
        <Tooltip {...tooltipProps}>
            <Rule rule={rule}/>
        </Tooltip>
    )
};