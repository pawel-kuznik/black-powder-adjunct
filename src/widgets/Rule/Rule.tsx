import { useTranslation } from "react-i18next";
import { RuleType } from "../../data/rules";
import { SimpleRule } from "./SimpleRule";

export interface RuleProps {

    rule: RuleType;
};

export function Rule({ rule } : RuleProps) {

    const { t } = useTranslation();

    return (<SimpleRule
        title={t(`special.label.${rule}`)}
        description={t(`special.description.${rule}`)}
    />);
};
