import { useParams } from "react-router";
import { ArmyReader, Page } from "../../widgets";

export function ListReaderPage() {

    const { listId } = useParams();

    return (
        <Page>
            <ArmyReader id={String(listId)}/>
        </Page>
    );
};
