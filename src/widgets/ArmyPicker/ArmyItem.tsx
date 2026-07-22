import { useTranslation } from "react-i18next";
import { ArmyDescriptor } from "../../data/armies";
import { ArmyCard } from "../ArmyCard/ArmyCard";
import { Button } from "../Button";

export interface ArmyItemProps {
    army: ArmyDescriptor;
    onPick?: (army: ArmyDescriptor) => void;
    onView?: (army: ArmyDescriptor) => void;
    onRemove? : (army: ArmyDescriptor) => void;
};

export function ArmyItem({ army, onPick, onView, onRemove } : ArmyItemProps) {

    const { t } = useTranslation();

    const handlePickClick = () => {
        onPick?.(army);
    };

    const handleViewClick = () => {
        onView?.(army);
    };

    const handleRemoveClick = () => {
        onRemove?.(army);
    };

    const controls = (
        <>
            {onPick && <Button label={t("armypicker.armyitem.edit.label")} onClick={handlePickClick}/>}
            {onView && <Button label={t("armypicker.armyitem.view.label")} onClick={handleViewClick}/>}
            {onRemove && <Button label={t("armypicker.armyitem.remove.label")} style="red" onClick={handleRemoveClick}/>}
        </>
    );

    return (
        <ArmyCard army={army} controls={controls}/>
    );
};