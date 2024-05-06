import { useTranslation } from "react-i18next";
import { RuleLayout } from "../RuleLayout";

export function Fanatics() {
    const { t } = useTranslation();

    // @todo add anchors to ferocious charge and terrifying charge in description.

    return (
        <RuleLayout title={t("rule.fanatics.label")}>
            <p>{t("rule.fanatics.description")}</p>
        </RuleLayout>
    );
};