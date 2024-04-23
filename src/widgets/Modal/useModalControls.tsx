import { FunctionComponent, useContext } from "react";
import { ModalRootControlsContext } from "./ModalRootContext";

export function useModalControls() {

    const controls = useContext(ModalRootControlsContext);

    const show = (id: string, Component: FunctionComponent<any>, params: any) => {
        controls.show(id, Component, params);
    };

    return {
        show
    };
}; 