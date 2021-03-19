import React from "react";
import Bus from "./bus/Bus";
import Lang from "@bit/wasedatime.core.ts.constants.langs";
import i18nConfig from "@bit/wasedatime.core.ts.utils.i18n";
import translationEN from "./constants/locales/en/translation.json";
import translationJP from "./constants/locales/jp/translation.json";

i18nConfig({
  [Lang.EN]: translationEN,
  [Lang.JA]: translationJP,
});

export default function Root(props) {
  return (
    <section>
      {/* <div className="float-container">

        <div className="float-child">
        <RoomFinder />
        <Bus />

        </div>
        
        <div className="float-child">
        <Map />
        </div>
      
      </div> */}
      <RoomFinder />
      <Bus />
    
      
      
    </section>
  );
}
