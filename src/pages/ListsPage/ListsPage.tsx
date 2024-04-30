import { useNavigate } from "react-router-dom";
import { ArmyPicker, Page, Title } from "../../widgets";
import { ArmyDescriptor } from "../../data/armies";
import { useArmyDescriptorsStore } from "../../state/armyDescriptors";
import { prepareArmyData } from "../../logic/prepareArmyData";

export function ListsPage() {

    const navigate = useNavigate();

    const armyDescriptorsStore = useArmyDescriptorsStore();

    const handleArmyPick = (army: ArmyDescriptor) => {

        navigate(`/list/${army.id}`);
    };

    const handleArmyRemove = (army: ArmyDescriptor) => {

        armyDescriptorsStore.remove(army);
    };

    const handleCreateNewClick = () => {

        const army = prepareArmyData({ });
        armyDescriptorsStore.store(army);
        
        navigate(`/list/${army.id}`);
    };

    return (
        <Page>
            <Title text="Lists"/>
            <button onClick={handleCreateNewClick}>Create new</button>
            <ArmyPicker onPick={handleArmyPick} onRemove={handleArmyRemove}/>
        </Page>
    );
};