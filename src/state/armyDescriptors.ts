import { create } from "zustand";
import { ArmyDescriptor } from "../data/armies";
import { createJSONStorage, persist } from "zustand/middleware";

export interface ArmyDescriptorsStore {
    descriptors: { [ key: string ] : ArmyDescriptor };
    store: (army: ArmyDescriptor) => void;
    remove: (army: ArmyDescriptor) => void;
    getName: (id: string) => string;
};

export const useArmyDescriptorsStore = create<ArmyDescriptorsStore>()(
    persist((set, get) => ({
        descriptors: { },
        store: (army: ArmyDescriptor) => {
            set(state => ({
                descriptors: {
                    ...state.descriptors,
                    ...{ [army.id] : army }
                }
            }));
        },
        remove: (army: ArmyDescriptor) => {
            set(state => {
                const copy = { ...state };
                delete copy.descriptors[army.id];
                return copy;
            });
        },
        getName: (id: string) => {

            const armies = get().descriptors;
            return armies[id] ? armies[id].name : '';
        }
    }), {
        name: "army-descriptors",
        storage: createJSONStorage(() => localStorage)
    })
);