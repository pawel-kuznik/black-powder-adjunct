import { ReactNode } from "react";

export interface RuleLayoutProps {
    title: string;
    children: ReactNode;
};

export function RuleLayout({ title, children } : RuleLayoutProps) {

    return (
        <div>
            <h4>{title}</h4>
            <div>
                {children}
            </div>
        </div>
    );
};