import React, { useEffect, useState } from "react"
import { HashRouter, Routes, Route } from "react-router-dom"
import { ThemeContext } from "@app/utils/theme-context"
import Joblist from "@app/components/joblist/Joblist"
import Jobdetail from "@app/components/jobdetail/Jobdetail"
import { useTranslation } from "react-i18next"
import HeaderWithModal from "@app/components/common/HeaderWithModal"
import Header from "@app/components/common/Header"
import type UserProfile from "./types/userProfile"
import type CareerComponentProps from "./types/careerComponentProps"

const App = () => {
  return (
    <div className="flex h-screen flex-col">
      <HashRouter>
        <InnerApp />
      </HashRouter>
    </div>
  )
}

const PageRoutes = ({ profile, setProfile }: CareerComponentProps) => {
  return (
    <Routes>
      <Route
        element={<Joblist profile={profile} setProfile={setProfile} />}
        path="/"
      />
      <Route
        element={<Jobdetail profile={profile} setProfile={setProfile} />}
        path="/:jobId"
      />
    </Routes>
  )
}

const InnerApp = () => {
  const { t, i18n } = useTranslation()
  const { theme, setTheme } = React.useContext(ThemeContext)

  const [profile, setProfile] = useState<UserProfile>({
    name: "Alex Johnson",
    school: "SILS",
    email: "alex.johnson@example.com",
    grade: "3",
    classOf: "2025",
    languages: [
      { language: "English", level: "Fluent" },
      { language: "Japanese", level: "N4" },
      // Add more as needed
    ],
    interests: ["Marketing", "IT"],
    // Add more as needed
  })

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
      <div className="h-[calc(100vh-127px)] overflow-y-auto">
        <div className="container mx-auto px-2">
          {/* md:w-3/5 */}

          <PageRoutes profile={profile} setProfile={setProfile} />
        </div>
      </div>
    </>
  )
}

export default App
