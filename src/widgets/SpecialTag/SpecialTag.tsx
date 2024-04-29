import { useTranslation } from "react-i18next";
import { SpecialType } from "../../data/special";

import "./SpecialTag.css";

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

    // when the expanded is not provided then we want to still give the hint
    // about what is the spcial trait in a tooltip.
    const title = !expanded ? String(t(`special.description.${special}`)) : "";

    return (
        <span className={css.join(" ")} title={title} onClick={handleClick}>
            {t(`special.label.${special}`)}
            {expanded && (<div className="specialtag-description"> - {String(t(`special.description.${special}`))}</div>)}
        </span>
    );
};
