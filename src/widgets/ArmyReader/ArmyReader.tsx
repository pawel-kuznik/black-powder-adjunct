import { useTranslation } from "react-i18next";
import { prepareArmyData } from "../../logic/prepareArmyData";
import { calcArmyCost } from "../../logic";
import { useArmyDescriptorsStore } from "../../state/armyDescriptors";
import { CommanderCard } from "../CommanderCard";
import { PointsBadge } from "../PointsBadge";
import { Title } from "../Title";
import { BrigadeReader } from "./BrigadeReader";

import "./ArmyReader.css";

export interface ArmyReaderProps {
    id?: string;
};

/**
 *  A read-only counterpart to the ArmyEditor. It presents an army,
 *  its general, and its brigades without exposing any editing controls.
 */
export function ArmyReader({ id = '' } : ArmyReaderProps) {

    const { t } = useTranslation();

    const armyDescriptors = useArmyDescriptorsStore();

    const army = armyDescriptors.descriptors[id] || prepareArmyData({ });

    const points = calcArmyCost(army);

    return (
        <div>
            <Title text={t("armyreader.title")}/>
            <div className="armyreader-meta">
                <span className="armyreader-name">{army.name}</span>
                <PointsBadge points={points} layout="column"/>
            </div>

            <div>
                <Title level={2} text={t("armyreader.general.title")}/>
                <CommanderCard commander={army.general}/>
            </div>

            <div>
                <Title level={2} text={t("armyreader.brigades.title")}/>
                {army.brigades.map(b => <BrigadeReader key={b.id} brigade={b}/>)}
            </div>
        </div>
    );
}
