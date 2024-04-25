import { createJSONStorage, persist } from "zustand/middleware";
import { CommanderDescriptor } from "../data/commanders";
import { create } from "zustand";

export interface CommanderDescriptorsStore {
    descriptors: { [ key: string ] : CommanderDescriptor };
    store: (commander: CommanderDescriptor) => void;
    remove: (commander: CommanderDescriptor) => void;
};

export const useCommanderDescriptorsStore = create<CommanderDescriptorsStore>()(
    persist<CommanderDescriptorsStore>((set) => ({
        descriptors: { },
        store: (commander: CommanderDescriptor) => {
            set(state => ({
                descriptors: {
                    ...state.descriptors,
                    ...{ [commander.id] : commander }
                }
            }))
        },
        remove: (commander: CommanderDescriptor) => {
            set(state => {
                const copy = { ...state };
                delete copy.descriptors[commander.id];
                return copy;
            })
        }
    }), {
        name: "commander-descriptors",
        storage: createJSONStorage(() => localStorage)
    })
)
