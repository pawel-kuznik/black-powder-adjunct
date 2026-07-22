import { BrigadeUnitDescriptor } from "../../data/brigades";
import { UnitCard } from "../UnitCard";

import "./BrigadeUnitReader.css";

export interface BrigadeUnitReaderProps {

    /**
     *  The brigade unit to show.
     */
    unit: BrigadeUnitDescriptor;
};

/**
 *  A read-only counterpart to the BrigadeUnit. It presents a unit's
 *  count alongside its card, without any editing controls.
 */
export function BrigadeUnitReader({ unit } : BrigadeUnitReaderProps) {

    return (
        <div className="brigadereader-unit">
            <span className="brigadereader-unit-multiplier common-cardbox">
                {unit.count}<>&times;</>
            </span>
            <UnitCard unit={unit.unit}/>
        </div>
    );
};
