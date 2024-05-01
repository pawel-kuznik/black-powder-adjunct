import { ReactNode } from "react";

import "./CardsList.css";

export interface CardsListProps {

    children: ReactNode;
};

/**
 *  A component to show a list of cards. The component mainly provides
 *  correct spacing for *Card components when they need to be displayed
 *  inside picker components. 
 */
export function CardsList({ children } : CardsListProps) {
    return (
        <div className="cardslist">
            {children}
        </div>
    );
};
