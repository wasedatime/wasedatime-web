import React from "react";
import { configAuth } from "wasedatime-ui";
import ReactGA from "react-ga4";
import App from "@app/components/App";
import { ThemeProvider } from "@app/utils/theme-context";
import { RecoilRoot } from "recoil";

import { API } from "@aws-amplify/api";

import "@app/utils/i18n";
import "@app/styles/main.css";
import "@app/styles/common.css";

configAuth();

const apiConfig = {
  API: {
    endpoints: [
      {
        name: "wasedatime-dev",
        endpoint: import.meta.env.VITE_API_BASE_URL,
      },
    ],
  },
};
API.configure(apiConfig);

ReactGA.initialize(import.meta.env.VITE_GA_ID, {});

export default function Root(props) {
  return (
    <section className="sm:h-screen h-[calc(100vh-50px)]">
      <RecoilRoot>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </RecoilRoot>
    </section>
  );
}
