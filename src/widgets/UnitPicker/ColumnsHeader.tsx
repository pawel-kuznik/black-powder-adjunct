import { StatsColumns } from "../StatsColumns";

export function ColumnsHeader() {

    return (
        <StatsColumns inversed sizePreset="listing">
            <div>
                Name
            </div>
            <div>
                Arnament
            </div>
            <div>
                Hand to Hand
            </div>
            <div>
                Shooting
            </div>
            <div>
                Morale
            </div>
            <div>
                Stamina
            </div>
        </StatsColumns>
    );
};