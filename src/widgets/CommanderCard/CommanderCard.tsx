import { CommanderDescriptor } from "../../data/commanders";
import { calcCommanderCost } from "../../logic";
import { Badge } from "../Badge";
import { Flag } from "../Flag";
import "./CommanderCard.css";

export interface CommanderCardProps {
    commander: CommanderDescriptor;
};

export function CommanderCard({ commander }: CommanderCardProps) {

    const points = calcCommanderCost(commander);

    return (
        <div className="commandercard">
            <div>
                <Flag which={commander.affiliation}/>
                {commander.name}
                <Badge>{points} pts</Badge>
            </div>
            <div>
                {commander.personality}
            </div>
        </div>
    );
}