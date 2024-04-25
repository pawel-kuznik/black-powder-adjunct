import { useTranslation } from "react-i18next";
import { SpecialType } from "../../data/special";

import "./SpecialTag.css";

export interface SpecialTag {
    special: SpecialType;
    onClick?: (special: SpecialType) => void;
};

export function SpecialTag({ special, onClick } : SpecialTag) {

    const { t } = useTranslation();

    const handleClick = () => {
        onClick?.(special);
    };

    const css = [ "specialtag" ];
    if (onClick) css.push("spacialtag-clickable");

    return (
        <span className={css.join(" ")} title={String(t(`special.description.${special}`))} onClick={handleClick}>
            {t(`special.label.${special}`)}
        </span>
    );
};
