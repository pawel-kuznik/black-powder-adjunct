import { ReactNode } from "react";
import "./Page.css";

export interface PageProps {
    children?: ReactNode;
};

export function Page({ children }: PageProps) {

    return (
        <section className="page">
            {children}
        </section>
    );
};