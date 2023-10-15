import React, { useEffect, useContext } from "react"
import { HashRouter, Routes, Route } from "react-router-dom"
import { ThemeContext } from "@app/utils/theme-context"
import Joblist from "@app/components/Joblist"
import Jobdetail from "@app/components/Jobdetail"
import { useTranslation } from "react-i18next"
import HeaderWithModal from "@app/components/common/HeaderWithModal"
import Header from "@app/components/common/Header"
import { jobData as job } from "./Data/JobData"

type Props = {}

const App = () => {
  return (
    <div className="flex h-screen flex-col">
      <HashRouter>
        <InnerApp />
      </HashRouter>
    </div>
  )
}

const PageRoutes = () => {
  return (
    <Routes>
      <Route element={<Joblist />} path="/" />
      <Route element={<Jobdetail />} path="/:jobId" />
    </Routes>
  )
}

const InnerApp = (props: Props) => {
  const { t, i18n } = useTranslation()
  const { theme, setTheme } = React.useContext(ThemeContext)

  return (
    <>
      <div className="flex h-[67px] shrink-0 grow-0">
        <Header
          title={t("Career")}
          onInputChange={() => {}}
          placeholder={t("")}
          inputText=""
          disabled={true}
          isBlur={true}
          theme={theme}
          setTheme={setTheme}
          changeLang={(lng) => i18n.changeLanguage(lng)}
        />
      </div>
      <div className="flex flex-col md:w-3/5 ">
        {/* md:w-3/5 */}
        <PageRoutes />
      </div>
    </>
  )
}

export default App
