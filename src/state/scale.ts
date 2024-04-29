import { createJSONStorage, persist } from "zustand/middleware";
import { ScaleType } from "../data/scale";
import { create } from "zustand";

export interface ScaleStore {
    scale: ScaleType;
    change: (scale: ScaleType) => void;
};

export const useScaleStore = create<ScaleStore>()(
    persist((set) => ({
        scale: "1:1",
        change: (scale: ScaleType) => {
            set(() => ({
                scale
            }));
        }
    }),
    {
        name: "scale",
        storage: createJSONStorage(() => localStorage)
    })
);