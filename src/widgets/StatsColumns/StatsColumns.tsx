import { ReactNode } from "react";
import "./StatsColumns.css";

export interface StatsColumnsProps {

    inversed?: boolean;

    sizePreset?: "auto" | "listing";

    children?: ReactNode;
};

export function StatsColumns({ children, sizePreset = "auto", inversed = false }: StatsColumnsProps) {

    const css = [ 'statscolumns', `statscolumns-${sizePreset}` ];
    if (inversed) css.push(`statscolumns-inversed`);

    return (
        <div className={css.join(' ')}>
            {children}
        </div>
    );
};
