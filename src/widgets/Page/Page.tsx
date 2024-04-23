import { ReactNode } from "react";
import { ModalRoot } from "../Modal";
import "./Page.css";

export interface PageProps {
    modal?: boolean;
    children?: ReactNode;
};

export function Page({ modal = false, children }: PageProps) {

    if (modal) return (
        <section className="page page-modal">
            {children}
        </section>
    );

    return (
        <ModalRoot>
            <section className="page page-full">
                {children}
            </section>
        </ModalRoot>
    );
};