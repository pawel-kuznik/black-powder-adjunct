import { useTranslation } from "react-i18next";
import { useScaleStore } from "../../state";
import { ChangeEvent } from "react";
import { ScaleType, scaleTypes } from "../../data/scale";

import "./ScaleSelector.css";

/**
 * A SELECT element that changes the used scale. Note that it changes the scale globally
 * and every element dealing with distance should adjust it rendering.
 */
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
                {scaleTypes.map(scale => (
                    <option value={scale}>{t(`mainmenu.scaleselector.${scale.replace(":", '_')}.label`)}</option>
                ))}
            </select>
        </div>
    );
};