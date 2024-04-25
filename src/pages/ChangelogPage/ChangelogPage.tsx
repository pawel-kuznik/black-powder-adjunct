import { Page, Title } from "../../widgets";
import Markdown from "react-markdown";
import changelog from "../../../CHANGELOG.md?raw";

export function ChangelogPage() {

    return (
        <Page>
            <Title text="Changelog"/>
            <Markdown>{changelog}</Markdown>
        </Page>
    );
};