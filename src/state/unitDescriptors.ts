import { create } from "zustand";
import { UnitDescriptor, defaultUnits } from "../data/units";
import { createJSONStorage, persist } from "zustand/middleware";

if (!localStorage.getItem("unit-descriptors")) {
    localStorage.setItem("unit-descriptors", JSON.stringify({ state: { descriptors: arrayToDescriptor(defaultUnits), version: 0 } }));
}

export interface UnitDescriptorStore {
    descriptors: { [key: string ] : UnitDescriptor };
    store: (unit: UnitDescriptor) => void;
    remove: (unit: UnitDescriptor) => void;
    replaceAll: (replacement: { [key: string ] : UnitDescriptor }) => void;
    restoreDefaults: () => void;
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
            }));
        },
        remove: (unit: UnitDescriptor) => {
            set(state => {
                const copy = { ...state };
                delete copy.descriptors[unit.id];
                return copy;
            });
        },
        replaceAll: (replacement: { [key: string ] : UnitDescriptor }) => {
            set(() => ({ descriptors: replacement }));  
        },
        restoreDefaults: () => {
            set(() => ({ descriptors: arrayToDescriptor(defaultUnits) }));
        }
    }), {
        name: "unit-descriptors",
        storage: createJSONStorage(() => localStorage),
    })
);

function arrayToDescriptor(input: UnitDescriptor[]) : { [ key: string ] : UnitDescriptor } {

    const data : { [ key: string ] : UnitDescriptor } = { };

    input.forEach(u => {
        data[u.id] = u;
    });

    return data;
};
