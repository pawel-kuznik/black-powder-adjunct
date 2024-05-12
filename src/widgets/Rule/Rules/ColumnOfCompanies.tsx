import { useTranslation } from "react-i18next";
import { RuleLayout } from "../RuleLayout";

export function ColumnOfCompanies() {
    
    const { t } = useTranslation();

    return (
        <RuleLayout title={t("rule.column-of-companies.label")}>
            <p>{t("rule.column-of-companies.description.0")}</p>
            <p>{t("rule.column-of-companies.description.1")}</p>
            <p>{t("rule.column-of-companies.description.2")}</p>
            <p>{t("rule.column-of-companies.description.3")}</p>
            <p>{t("rule.column-of-companies.description.4")}</p>
        </RuleLayout>
    );
};