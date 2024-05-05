import { useTranslation } from "react-i18next";
import { RuleLayout } from "../RuleLayout";

export function FreshlyRaised() {
    
    const { t } = useTranslation();
    
    return (
        <RuleLayout title={t("rule.freshly-raised.label")}>
            <p>{t("rule.freshly-raised.description")}</p>
            <table>
                <tbody>
                    <tr>
                        <th>{t("rule.freshly-raised.score.label")}</th>
                        <th>{t("rule.freshly-raised.result.label")}</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>{t("rule.freshly-raised.terror.result")}</td>
                    </tr>
                    <tr>
                        <td>2-3</td>
                        <td>{t("rule.freshly-raised.panic.result")}</td>
                    </tr>
                    <tr>
                        <td>4-5</td>
                        <td>{t("rule.freshly-raised.sterling.result")}</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>{t("rule.freshlu-raised.huzzah.result")}</td>
                    </tr>
                </tbody>
            </table>
        </RuleLayout>
    );
};