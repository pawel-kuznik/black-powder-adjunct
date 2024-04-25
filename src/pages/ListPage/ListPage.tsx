import { useParams } from "react-router";
import { ArmyEditor, Page } from "../../widgets";

export function ListPage() {

    const { listId } = useParams();

    return (
        <Page>
            <ArmyEditor id={String(listId)}/>
        </Page>
    );
};