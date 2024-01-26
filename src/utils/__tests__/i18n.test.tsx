import { render } from "@testing-library/react";

import { I18nextProvider, useTranslation } from "react-i18next";

import i18n from "../i18n";

const UseTranslationComponent = function () {
    const { t } = useTranslation();

    return (
        <I18nextProvider i18n={i18n}>
            <div>{t("ــTEST_TEXTــ")}</div>
        </I18nextProvider>
    );
};

describe("When use `useTranslate` hook inside a component.", () => {
    it("test render", () => {
        const { getByText } = render(<UseTranslationComponent />);
        const node = getByText("TEST_TEXT");
        expect(node).toBeDefined();
    });
});
