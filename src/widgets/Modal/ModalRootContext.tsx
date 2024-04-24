import { FunctionComponent, createContext } from "react";

export type ModalStackList = Array<[ id: string, Component: FunctionComponent<any>, params: any ]>;

export const ModalRootContext = createContext<ModalStackList>([]);

export type ModalControls = {

    show: (id: string, Component: FunctionComponent<any>, params: any) => void;
};

export const ModalRootControlsContext = createContext<ModalControls>({ 
    show: () => { }
});