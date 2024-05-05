import { useTranslation } from "react-i18next";
import { RuleLayout } from "../RuleLayout";

export function LieDown() {

    const { t } = useTranslation();

    return (
        <RuleLayout title={t("rule.lie-down.label")}>
            <p>{t("rule.lie-down.description.0")}</p>
            <p>{t("rule.lie-down.description.1")}</p>
        </RuleLayout>
    );
};