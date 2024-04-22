import { FormEvent, ReactNode } from "react";

export interface BasicFormProps {

    onSubmit?: (data: object) => void;
    onChange?: (data: object) => void;
    children?: ReactNode;
};

export function BasicForm({ children, onSubmit, onChange }: BasicFormProps) {

    const extractData = (event: FormEvent) : object => {

        const form = (event.target as HTMLElement).closest("form") as HTMLFormElement;

        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        const selects = form.querySelectorAll("select");

        for (let select of selects) {

            if (select.getAttribute('disabled')) continue;

            const name = String(select.getAttribute('name'));
            if (!name) continue;

            data[name] = select.value;
        }        

        return data;
    };

    const handleChange = (event: FormEvent) => {

        if (!onChange) return;

        onChange(extractData(event));
    };

    const handleSubmit = (event: FormEvent) => {

        if (!onSubmit) return;

        event.preventDefault();

        onSubmit(extractData(event));
    };

    return (
        <form onSubmit={handleSubmit} onChange={handleChange}>
            {children}
        </form>
    );
};