import { StatsColumns } from "../StatsColumns";

import "./ColumnsHeader.css";

export function ColumnsHeader() {
    return (
        <div className="unitpicker-columnsheader">
            <StatsColumns inversed sizePreset="listing">
                <div className="unitpicker-columnsheader-name">
                    Unit
                </div>
                <div className="unitpicker-columnsheader-center">
                    Arnament
                </div>
                <div className="unitpicker-columnsheader-center">
                    H-to-H
                </div>
                <div className="unitpicker-columnsheader-center">
                    Shooting
                </div>
                <div className="unitpicker-columnsheader-center">
                    Morale
                </div>
                <div className="unitpicker-columnsheader-center">
                    Stamina
                </div>
            </StatsColumns>
        </div>
    );
};