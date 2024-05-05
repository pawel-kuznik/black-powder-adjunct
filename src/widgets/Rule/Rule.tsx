import { useTranslation } from "react-i18next";
import { RuleType } from "../../data/rules";
import { RuleLayout } from "./RuleLayout";
import { LieDown } from "./Rules/LieDown";
import { FreshlyRaised } from "./Rules/FreshlyRaised";

export interface RuleProps {

    rule: RuleType;
};

export function Rule({ rule } : RuleProps) {

    const { t } = useTranslation();

    if (rule === "lie-down") return <LieDown/>;
    if (rule === "freshly-raised") return <FreshlyRaised/>

    return (
        <RuleLayout title={t(`rule.${rule}.label`)}>
            {t(`rule.${rule}.description`)}
        </RuleLayout>
    );
};
