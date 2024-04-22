import { ReactNode } from "react";
import "./StatsColumns.css";

export interface StatsColumnsProps {

    children?: ReactNode;
};

export function StatsColumns({ children }: StatsColumnsProps) {

    return (
        <div className="statscolumns">
            {children}
        </div>
    );
};
