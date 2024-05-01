import { useTranslation } from "react-i18next";
import { Button } from "../Button";
import { UnitCard } from "../UnitCard";
import { BrigadeUnitDescriptor } from "../../data/brigades";

import "./BrigadeUnit.css";
import { useRef } from "react";

export interface BrigadeUnitProps {
    unit: BrigadeUnitDescriptor;
    onChange: (init: BrigadeUnitDescriptor) => void;
    onRemove: (unit: BrigadeUnitDescriptor) => void;
};

export function BrigadeUnit({ unit, onChange, onRemove } : BrigadeUnitProps) {

    const { t } = useTranslation();
    const inputRef = useRef<HTMLInputElement|null>(null);

    const handleRemoveClick = () => {
        onRemove(unit);
    };

    const handleChange = () => {
        onChange({
            count: Number(inputRef.current?.value) || 0,
            unit: unit.unit
        });
    };

    const controls = (
        <>
            <Button style="red" submit={false} onClick={handleRemoveClick} label={t("brigadeeditor.brigadeunit.remove.label")}/>
        </>
    );

    return (
        <div className="brigadeeditor-unit">
            <span className="brigadeeditor-unit-multiplier common-cardbox">
                <input ref={inputRef} type="number" min="1" defaultValue={unit.count} onChange={handleChange}/>
                <>&times;</>
            </span>
            <UnitCard unit={unit.unit} controls={controls}/>
        </div>
    );
};