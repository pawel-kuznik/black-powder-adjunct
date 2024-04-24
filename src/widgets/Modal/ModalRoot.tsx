import { FunctionComponent, ReactNode, useState } from "react";
import { ModalRootContext, ModalRootControlsContext, ModalStackList } from "./ModalRootContext";

export interface ModalRootProps {

    children?: ReactNode;
};

export function ModalRoot({ children } : ModalRootProps) {

    const [ modals, setModals ] = useState<ModalStackList>([]);

    const controls = {
        show: (id: string, Component: FunctionComponent, params: any) => {

            // if a modal with given id is already in the modal stack, then we don't
            // want to create a new one.
            if (modals.findIndex(d => d[0] === id) !== -1) return;

            const newModals: ModalStackList = [
                ...modals,
                [ id, Component, params ]
            ];

            setModals(newModals);
        }
    };

    return (
        <ModalRootContext.Provider value={modals}>
            <ModalRootControlsContext.Provider value={controls}>
                {children}
                {modals.map((d, k) => {

                    const id = d[0];
                    const Component = d[1];
                    const params = d[2];

                    const handleClose = () => {

                        const filtered = modals.filter(d => d[0] !== id);
                        setModals(filtered);
                    };

                    return <Component key={`${id}-${k}`} {...params} onClose={handleClose} />;
                })}
            </ModalRootControlsContext.Provider>
        </ModalRootContext.Provider>
    );
};
