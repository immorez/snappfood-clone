import { useTranslation } from "react-i18next";

function App() {
    const { t } = useTranslation();

    return <>{t("SALAM")}</>;
}

export default App;
