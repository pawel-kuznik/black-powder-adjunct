import { useTranslation } from "react-i18next";
import { Page, Title } from "../../widgets";

export function AboutPage() {

    const { t } = useTranslation();

    return (
        <Page>
            <Title text={t("aboutpage.title")}/>
            <p>{t("aboutpage.contents.1")}</p>
            <p>{t("aboutpage.contents.2")}</p>
            <p>{t("aboutpage.contents.3")}</p>
        </Page>
    );
};
