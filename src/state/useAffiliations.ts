import { affiliations } from "../data/affiliation";
import { useArmyDescriptorsStore } from "./armyDescriptors";
import { useCommanderDescriptorsStore } from "./commanderDescriptors";
import { useUnitDescriptorsStore } from "./unitDescriptors";

export function useAffiliations() {

    const armyDescriptorsStore = useArmyDescriptorsStore();
    const unitDescriptorsStore = useUnitDescriptorsStore();
    const commanderDescriptorStore = useCommanderDescriptorsStore();

    const allAffiliations = [
        ...Object.values(armyDescriptorsStore.descriptors).map(a => a.affiliation),
        ...Object.values(commanderDescriptorStore.descriptors).map(c => c.affiliation),
        ...Object.values(unitDescriptorsStore.descriptors).map(u => u.affiliation),
        ...affiliations
    ].filter(a => a);

    return [...new Set(allAffiliations)];
};