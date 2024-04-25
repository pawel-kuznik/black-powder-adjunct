import { UnitDescriptor } from "../../data/units";
import { ControlsWrapper } from "../ControlsWrapper";
import { UnitCard } from "../UnitCard";

export interface BrigadeUnitProps {
    unit: UnitDescriptor;
    onRemove: (unit: UnitDescriptor) => void;
};

export function BrigadeUnit({ unit, onRemove } : BrigadeUnitProps) {

    const handleRemoveClick = () => {
        onRemove(unit);
    };

    const rightControls = (
        <>
            <button onClick={handleRemoveClick}>Remove</button>
        </>
    );

    return (
        <div className="brigadeeditor-unit">
            <ControlsWrapper right={rightControls}>
                <UnitCard unit={unit}/>
            </ControlsWrapper>
        </div>
    );
};