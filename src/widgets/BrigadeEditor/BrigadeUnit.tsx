import { useTranslation } from "react-i18next";
import { UnitDescriptor } from "../../data/units";
import { Button } from "../Button";
import { UnitCard } from "../UnitCard";

export interface BrigadeUnitProps {
    unit: UnitDescriptor;
    onRemove: (unit: UnitDescriptor) => void;
};

export function BrigadeUnit({ unit, onRemove } : BrigadeUnitProps) {

    const { t } = useTranslation();

    const handleRemoveClick = () => {
        onRemove(unit);
    };

    const controls = (
        <>
            <Button style="red" submit={false} onClick={handleRemoveClick} label={t("brigadeeditor.brigadeunit.remove.label")}/>
        </>
    );

    return (
        <div className="brigadeeditor-unit">
            <UnitCard unit={unit} controls={controls}/>
        </div>
    );
};