import React, { useEffect } from "react";

import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const RedirectPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const timeout = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  useEffect(() => {
    const redirectToHomeAfter5Sec = async () => {
      if (window.location.search.includes("error_description")) {
        await timeout(5000);
        navigate("/");
      }
    };

    redirectToHomeAfter5Sec().catch((err) => console.error(err));
  }, []);

  return window.location.search.includes("error_description") ? (
    <div className="mt-20">
      <h1>{t("verify.failed.title")}</h1>
      <br />
      <p>{t("verify.failed.message1")}</p>
      <p>{t("verify.failed.message2")}</p>
      <p>{t("verify.failed.message3")}</p>
    </div>
  ) : (
    <div className="mt-20">
      <h1>{t("verify.success.title")}</h1>
      <br />
      <p>{t("verify.success.message1")}</p>
      <p>{t("verify.success.message2")}</p>
    </div>
  );
};

export default RedirectPage;
