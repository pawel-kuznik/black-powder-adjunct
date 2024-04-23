import { create } from "zustand";
import { UnitDescriptor } from "../data/units";
import { createJSONStorage, persist } from "zustand/middleware";

export interface UnitDescriptorStore {
    descriptors: { [key: string ] : UnitDescriptor };
    store: (unit: UnitDescriptor) => void;
    remove: (unit: UnitDescriptor) => void;
};

/**
 *  This is an application-wide store with all unit descriptors for ,ser to use.
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
                    ...{ [unit.key]: unit }
                }
            }))
        },
        remove: (unit: UnitDescriptor) => {
            set(state => {
                const copy = { ...state };
                delete copy.descriptors[unit.key];
                return copy;
            })
        }
    }), {
        name: "unit-descriptors",
        storage: createJSONStorage(() => localStorage),
    })
);