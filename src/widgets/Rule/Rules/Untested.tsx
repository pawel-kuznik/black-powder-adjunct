import { useTranslation } from "react-i18next";
import { RuleLayout } from "../RuleLayout";

export function Untested() {
    const { t } = useTranslation();

    return (
        <RuleLayout title={t("rule.untested.label")}>
            <p>{t("rule.untested.description.0")}</p>
            <table>
                <tbody>
                    <tr>
                        <th>{t("rule.untested.score.label")}</th>
                        <th>{t("rule.untested.result.label")}</th>
                    </tr>
                    <tr>
                        <th>1</th>
                        <th>{t("rule.untested.result.1.label")}</th>
                    </tr>
                    <tr>
                        <th>2-3</th>
                        <th>{t("rule.untested.result.2.label")}</th>
                    </tr>
                    <tr>
                        <th>4-5</th>
                        <th>{t("rule.untested.result.3.label")}</th>
                    </tr>
                    <tr>
                        <th>6</th>
                        <th>{t("rule.untested.result.4.label")}</th>
                    </tr>
                </tbody>
            </table>
            <p>{t("rule.untested.description.1")}</p>
        </RuleLayout>
    );
};