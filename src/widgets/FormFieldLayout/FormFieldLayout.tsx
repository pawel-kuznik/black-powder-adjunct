import { ReactNode } from "react";
import "./FormFieldLayout.css";

export interface FormFieldLayoutProps {
    layout?: "inline" | "column";
    label: string;
    description? : ReactNode | string;
    children?: ReactNode;
};

export function FormFieldLayout({ layout = "column", label, description, children }: FormFieldLayoutProps) {

    const css = [ 'formfieldlayout' ];
    css.push(`formfieldlayout-layout-${layout}`);

    return (
        <div className={css.join(' ')}>
            {label && (<label>{label}</label>)}
            {children}
            {!!description && (<div className="formfieldlayout-description">{description}</div>)}
        </div>
    );
};