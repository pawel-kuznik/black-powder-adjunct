import { rulesTypes } from "../../data/rules";
import { Page, Rule } from "../../widgets";

export function RulesPage() {


    return (
        <Page>
            {rulesTypes.map((r, k) => <Rule key={k} rule={r}/>)}            
        </Page>
    );
};