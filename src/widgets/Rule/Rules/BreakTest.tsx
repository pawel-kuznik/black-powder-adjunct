import { useTranslation } from "react-i18next";
import { RuleLayout } from "../RuleLayout";

export function BreakTest() {
    const { t } = useTranslation();

    return (
        <RuleLayout title={t("rule.break-test.label")}>
            <p>{t("rule.break-test.description.0")}</p>
            <table>
                <tbody>
                    <tr>
                        <th colSpan={2}>{t("rule.break-test.modifiers.label")}</th>
                    </tr>
                    <tr>
                        <td>{t("rule.break-test.modifiers.excess-casualties.label")}</td>
                        <td>-1</td>
                    </tr>
                    <tr>
                        <td>{t("rule.break-test.modifiers.disorder.label")}</td>
                        <td>-1</td>
                    </tr>
                    <tr>
                        <td>{t("rule.break-test.modifiers.artillery.label")}</td>
                        <td>-1</td>
                    </tr>
                </tbody>
            </table>
            <p>{t("rule.break-test.description.0")}</p>
            <table>
                <tbody>
                    <tr>
                        <th colSpan={5}>{t("rule.break-test.results.label")}</th>
                    </tr>
                    <tr>
                        <th>{t("rule.break-test.results.roll.label")}</th>
                        <th>{t("rule.break-test.results.combat-type.label")}</th>
                        <th>{t("rule.break-test.results.infantry-result.label")}</th>
                        <th>{t("rule.break-test.results.cavalry-result.label")}</th>
                        <th>{t("rule.break-test.results.artillery-result.label")}</th>
                    </tr>
                    <tr>
                        <td>
                            {t("rule.break-test.results.score.4.description")}
                        </td>
                        <td>
                            {t("rule.break-test.results.combat-type.both.label")}
                        </td>
                        <td colSpan={3}>
                            {t("rule.break-test.results.result.4.all.description")}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            5
                        </td>
                        <td>
                            {t("rule.break-test.results.combat-type.both.label")}
                        </td>
                        <td colSpan={2}>
                            {t("rule.break-test.results.result.5.infantry-cavalry.description")}
                        </td>
                        <td>
                            {t("rule.break-test.results.result.5.artillery.description")}
                        </td>
                    </tr>
                    <tr>
                        <td rowSpan={2}>
                            6
                        </td>
                        <td>
                            {t("rule.break-test.results.combat-type.shooting.label")}
                        </td>
                        <td colSpan={2}>
                            {t("rule.break-test.results.result.6.shooting.infantry-cavalry.description")}
                        </td>
                        <td>
                            {t("rule.break-test.results.result.6.shooting.artillery.description")}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            {t("rule.break-test.results.combat-type.hand-to-hand.label")}
                        </td>
                        <td colSpan={2}>
                            {t("rule.break-test.results.result.6.hand-to-hand.infantry-cavalry.description")}
                        </td>
                        <td>
                            {t("rule.break-test.results.result.6.hand-to-hand.artillery.description")}
                        </td>
                    </tr>
                    <tr>
                        <td rowSpan={2}>
                            {t("rule.break-test.results.score.7.description")}
                        </td>
                        <td>
                            {t("rule.break-test.results.combat-type.shooting.label")}
                        </td>
                        <td colSpan={3}>
                            {t("rule.break-test.results.result.7.shooting.all.description")}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            {t("rule.break-test.results.combat-type.hand-to-hand.label")}
                        </td>
                        <td>
                            {t("rule.break-test.results.result.7.hand-to-hand.infantry.description")}
                        </td>
                        <td>
                            {t("rule.break-test.results.result.7.hand-to-hand.cavalry.description")}
                        </td>
                        <td>
                            {t("rule.break-test.results.result.7.hand-to-hand.artillery.description")}
                        </td>
                    </tr>
                </tbody>
            </table>
        </RuleLayout>
    );
};