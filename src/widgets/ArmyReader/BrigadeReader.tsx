import { BrigadeDescriptor } from "../../data/brigades";
import { calcBrigadeCost } from "../../logic";
import { CommanderCard } from "../CommanderCard";
import { PointsBadge } from "../PointsBadge";
import { BrigadeUnitReader } from "./BrigadeUnitReader";

import "./BrigadeReader.css";

export interface BrigadeReaderProps {

    /**
     *  The brigade to show.
     */
    brigade: BrigadeDescriptor;
};

/**
 *  A read-only counterpart to the BrigadeEditor. It presents a brigade's
 *  name, its commander, and its composition of units.
 */
export function BrigadeReader({ brigade } : BrigadeReaderProps) {

    const points = calcBrigadeCost(brigade);

    return (
        <section className="brigadereader">
            <div className="brigadereader-meta">
                <div className="brigadereader-data common-cardbox">
                    <div className="brigadereader-data-inner">
                        <span className="brigadereader-name">{brigade.name}</span>
                        <PointsBadge layout="brick" points={points}/>
                    </div>
                </div>
                <div className="brigadereader-commander">
                    <CommanderCard commander={brigade.commander}/>
                </div>
            </div>
            <div className="brigadereader-composition">
                {brigade.units.map(u => (
                    <BrigadeUnitReader key={u.unit.id} unit={u}/>
                ))}
            </div>
        </section>
    );
};
