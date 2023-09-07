import React from "react";
import { configAuth } from "wasedatime-ui";

import App from "@app/components/App";
import { ThemeProvider } from "@app/utils/theme-context";
import { RecoilRoot } from "recoil";

import { API } from "@aws-amplify/api";

import "@app/utils/i18n";
import "@app/styles/main.css";

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

export default function Root(props) {
  return (
    <section className="h-screen">
      <RecoilRoot>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </RecoilRoot>
    </section>
  );
}