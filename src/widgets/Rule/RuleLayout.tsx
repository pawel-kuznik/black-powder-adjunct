import { ReactNode } from "react";
import { HorizontalDecorator } from "../HorizontalDecorator";

import "./RuleLayout.css";

export interface RuleLayoutProps {
    title: string;
    children: ReactNode;
};

export function RuleLayout({ title, children } : RuleLayoutProps) {

    return (
        <div className="rulelayout">
            <h4>{title}</h4>
            <HorizontalDecorator/>
            <div>
                {children}
            </div>
        </div>
    );
};