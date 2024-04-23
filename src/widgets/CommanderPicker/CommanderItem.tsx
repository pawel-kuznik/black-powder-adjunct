import { CommanderDescriptor } from "../../data/commanders";
import { Flag } from "../Flag";
import { StatsColumns } from "../StatsColumns";

import "./CommanderItem.css"

export interface CommanderItemProps {

    commander: CommanderDescriptor;

    onPick?: (commander: CommanderDescriptor) => void;

    onRemove?: (commander: CommanderDescriptor) => void;
};

export function CommanderItem({ commander, onPick, onRemove }: CommanderItemProps) {

    const handlePickClick = () => {

        onPick?.(commander);
    };

    const handleRemoveClick = () => {
        onRemove?.(commander);
    };

    return (
        <div className="commanderpicker-commanderitem">
            {(onPick || onRemove) && (
                <div className="commanderpicker-commanderitem-controls">
                    {onPick && (<button type="button" onClick={handlePickClick}>Pick</button>)}
                    {onRemove && (<button type="button" onClick={handleRemoveClick}>Remove</button>)}
                </div>
            )}
            <StatsColumns>
                <div className="commanderpicker-commanderitem-name">
                    <Flag which={commander.affiliation}/>
                    {commander.name}
                </div>
                <div className="commanderpicker-commanderitem-cell">
                    {commander.staffRating}
                </div>
                <div className="commanderpicker-commanderitem-cell">
                    {commander.personality}
                </div>
                <div className="commanderpicker-commanderitem-cell">
                    {commander.move}
                </div>
            </StatsColumns>
        </div>
    );
};
