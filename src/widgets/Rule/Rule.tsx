import { Trans, useTranslation } from "react-i18next";
import { RuleType } from "../../data/rules";
import { RuleLayout } from "./RuleLayout";
import { LieDown } from "./Rules/LieDown";
import { FreshlyRaised } from "./Rules/FreshlyRaised";
import { MountedInfantry } from "./Rules/MountedInfantry";
import { Untested } from "./Rules/Untested";
import { RuleAnchor } from "./RuleAnchor";
import { BreakTest } from "./Rules/BreakTest";
import { ColumnOfCompanies } from "./Rules/ColumnOfCompanies";

export interface RuleProps {

    rule: RuleType;
};

export function Rule({ rule } : RuleProps) {

    const { t } = useTranslation();

    if (rule === "break-test") return <BreakTest/>

    if (rule === "column-of-companies") return <ColumnOfCompanies/>
    if (rule === "freshly-raised") return <FreshlyRaised/>
    if (rule === "mounted-infantry") return <MountedInfantry/>
    if (rule === "untested") return <Untested/>
    if (rule === "lie-down") return <LieDown/>;

    return (
        <RuleLayout title={t(`rule.${rule}.label`)}>
            <Trans i18nKey={`rule.${rule}.description`} components={{
                FerociousCharge: <RuleAnchor rule="ferocious-charge"/>,
                TerrifyingCharge: <RuleAnchor rule="terrifying-charge"/>,
                BreakTest: <RuleAnchor rule="break-test"/>
             }}/>
        </RuleLayout>
    );
};
