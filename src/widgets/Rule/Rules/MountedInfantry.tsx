import { useTranslation } from "react-i18next";
import { RuleLayout } from "../RuleLayout";

export function MountedInfantry() {
    
    const { t } = useTranslation();
    
    return (
        <RuleLayout title={t("rule.mounted-infantry.label")}>
            <p>{t("rule.mounted-infantry.description.0")}</p>
            <p>{t("rule.mounted-infantry.description.1")}</p>
            <p>{t("rule.mounted-infantry.description.2")}</p>
            <p>{t("rule.mounted-infantry.description.3")}</p>
        </RuleLayout>
    );
};