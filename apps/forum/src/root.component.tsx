import React from "react";
import { configAuth } from "wasedatime-ui";

import App from "@app/components/App";
import { ThemeProvider } from "@app/utils/theme-context";
import { RecoilRoot } from "recoil";

import "@app/utils/i18n";
import "@app/styles/main.css";

configAuth();

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
