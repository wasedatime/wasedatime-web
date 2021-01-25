import React from "react";
import "./configs/i18n.ts";
import Bus from "./bus/Bus";

export default function Root(props) {
  return (
    <section>
      <Bus />
    </section>
  );
}
