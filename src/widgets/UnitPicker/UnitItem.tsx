import { useTranslation } from "react-i18next";
import { UnitDescriptor } from "../../data/units";

import "./UnitItem.css";
import { UnitCard } from "../UnitCard";
import { Button } from "../Button";

export interface UnitItemProps {
    unit: UnitDescriptor;
    onPick?: (unit: UnitDescriptor) => void;
    onRemove?: (unit: UnitDescriptor) => void;
};

export function UnitItem({ unit, onPick, onRemove } : UnitItemProps) {

    const { t } = useTranslation();

    const handlePickClick = () => {
        onPick?.(unit);
    };

    const handleRemoveClick = () => {
        onRemove?.(unit);
    };

    const controls = (onPick || onRemove) ? (
        <>
            {onPick && (<Button label={t("unitpicker.unititem.pick.label")} onClick={handlePickClick}/>)}
            {onRemove && (<Button label={t("unitpicker.unititem.remove.label")} onClick={handleRemoveClick} style="red"/>)}
        </>
    ) : undefined;

    return (
        <UnitCard unit={unit} style="dense" controls={controls}/>
    );
}
