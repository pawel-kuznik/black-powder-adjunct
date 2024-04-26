import { FunctionComponent, ReactNode, useRef, useState } from "react";
import { ModalRootContext, ModalRootControlsContext, ModalStackList } from "./ModalRootContext";

export interface ModalRootProps {

    children?: ReactNode;
};

/**
 *  This is a special component that designates a root element
 *  for all subsequent modals. Immediate children of this component
 *  will be rendered normally, but any component invoked via `show()`
 *  function from `useModalControls` hook will be rendered on top of
 *  these children (or actually after these children).
 */
export function ModalRoot({ children } : ModalRootProps) {

    // These lines are strange, but strange for a reason. If we use
    // only a state then when there are nested modals the state while
    // executing onClose will be incorrect as only the last state
    // will be consolidated into the next component render. This is
    // cause we would be filtering from the original array twice
    // and setting the result from the independent filter actions.
    // Thus we need to have an instance of the array that can be transfered
    // between these calls. This is where the ref comes into play.
    // However, we can't only rely on a ref cause changing it's value
    // doesn't cause a render and we wouldn't see the change. Cause
    // of these very specific issues we persist the array of modals
    // in both ref and state.
    const modalsRef = useRef<ModalStackList>([]);
    const [ modals, setModals ] = useState<ModalStackList>(modalsRef.current);

    const controls = {
        show: (id: string, Component: FunctionComponent, params: any) => {

            // if a modal with given id is already in the modal stack, then we don't
            // want to create a new one.
            if (modalsRef.current.findIndex(d => d[0] === id) !== -1) return;

            const newModals: ModalStackList = modalsRef.current = [
                ...modalsRef.current,
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

                        const filtered = modalsRef.current = modalsRef.current.filter(d => d[0] !== id);
                        setModals(filtered);

                        if ('onClose' in params && typeof(params.onClose) === "function") params.onClose(); 
                    };

                    return <Component key={`${id}-${k}`} {...params} onClose={handleClose} />;
                })}
            </ModalRootControlsContext.Provider>
        </ModalRootContext.Provider>
    );
};
