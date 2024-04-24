import { useTranslation } from "react-i18next";
import { SpecialType } from "../../data/special";

import "./SpecialTag.css";

export interface SpecialTag {
    special: SpecialType;
};

export function SpecialTag({ special } : SpecialTag) {

    const { t } = useTranslation();

    return (
        <span className="specialtag" title={String(t(`special.description.${special}`))}>
            {t(`special.label.${special}`)}
        </span>
    );
};
