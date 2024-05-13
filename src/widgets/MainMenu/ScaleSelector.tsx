import { useTranslation } from "react-i18next";
import { useScaleStore } from "../../state";
import { ChangeEvent } from "react";
import { ScaleType } from "../../data/scale";

import "./ScaleSelector.css";

export function ScaleSelector() {

    const { t } = useTranslation();
    const { scale, change } = useScaleStore();

    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {

        change(event.target.value as ScaleType);
    }; 

    return (
        <div className="mainmenu-scaleselector">
            <p>{t("mainmenu.scaleselector.description")}</p>
            <select value={scale} onChange={handleChange}>
                <option>{t("mainmenu.scaleselector.1-1.label")}</option>
                <option>{t("mainmenu.scaleselector.1-2.label")}</option>
                <option>{t("mainmenu.scaleselector.inch-cm.label")}</option>
            </select>
        </div>
    );
};