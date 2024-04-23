import { StatsColumns } from "../StatsColumns";

export function ColumnsHeader() {
    return (
        <StatsColumns inversed>
            <div>Name</div>
            <div>Staff rating</div>
            <div>Personality</div>
            <div>Move</div>
        </StatsColumns>
    );
};