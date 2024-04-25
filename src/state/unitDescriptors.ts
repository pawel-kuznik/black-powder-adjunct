import { create } from "zustand";
import { UnitDescriptor, defaultUnits } from "../data/units";
import { createJSONStorage, persist } from "zustand/middleware";

if (!localStorage.getItem("unit-descriptors")) {
    localStorage.setItem("unit-descriptors", JSON.stringify({ state: { descriptors: defaultUnits, version: 0 } }));
}

export interface UnitDescriptorStore {
    descriptors: { [key: string ] : UnitDescriptor };
    store: (unit: UnitDescriptor) => void;
    remove: (unit: UnitDescriptor) => void;
};

/**
 *  This is an application-wide store with all unit descriptors for user to use.
 *  It can be used to define new units, remove definitions, and use it as a unit
 *  stats block.
 */
export const useUnitDescriptorsStore = create<UnitDescriptorStore>()(
    persist<UnitDescriptorStore>((set) => ({
        descriptors: { },
        store: (unit: UnitDescriptor) => {
            set(state => ({
                descriptors: {
                    ...state.descriptors,
                    ...{ [unit.id]: unit }
                }
            }))
        },
        remove: (unit: UnitDescriptor) => {
            set(state => {
                const copy = { ...state };
                delete copy.descriptors[unit.id];
                return copy;
            })
        }
    }), {
        name: "unit-descriptors",
        storage: createJSONStorage(() => localStorage),
    })
);