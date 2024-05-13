import { useTranslation } from "react-i18next";
import { SpecialType } from "../../data/special";

import "./SpecialTag.css";
import { RuleAnchor } from "../Rule";
import { RuleType } from "../../data/rules";

export interface SpecialTag {
    
    /**
     *  The special trait to show.
     */
    special: SpecialType;

    /**
     *  Should the special tag be redered in an expanded way? Meaning
     *  that the description of the special trait would be always visible.
     */
    expanded?: boolean;

    /**
     *  A callback called when user click the tag.
     */
    onClick?: (special: SpecialType) => void;
};

/**
 *  This is a component that shows information about a special trait.
 */
export function SpecialTag({ special, expanded, onClick } : SpecialTag) {

    const { t } = useTranslation();

    const handleClick = () => {
        onClick?.(special);
    };

    const css = [ "specialtag" ];
    if (onClick) css.push("spacialtag-clickable");

    return (
        <span className={css.join(" ")} onClick={handleClick}>
            <RuleAnchor rule={special as RuleType}>{t(`rule.${special}.label`)}</RuleAnchor>
            {expanded && (<div className="specialtag-description"> - {String(t(`special.description.${special}`))}</div>)}
        </span>
    );
};
