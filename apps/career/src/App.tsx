import React, { useState, useEffect } from "react"
import Header from "./components/common/Header"
import HeaderWithModal from "./components/common/HeaderWithModal"
import { HashRouter } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { ThemeContext } from "./utils/theme-context"
type Props = {}
// className = "flex h-screen flex-col"
const App = () => {
  return (
    <div className="flex h-screen flex-col">
      <HashRouter>
        <InnerApp />
      </HashRouter>
    </div>
  )
}

const InnerApp = () => {
  const { t, i18n } = useTranslation()
  const [commentNotify, setCommentNotify] = useState(false)
  const { theme, setTheme } = React.useContext(ThemeContext)
  return (
    <>
      <div className="flex h-[67px] shrink-0 grow-0">
        <Header
          title={t("navigation.campus")}
          onInputChange={() => {}}
          placeholder={t("search placeholder")}
          inputText=""
          disabled
          isBlur={false}
          theme={theme}
          setTheme={setTheme}
          changeLang={(lng) => i18n.changeLanguage(lng)}
          commentNotify={commentNotify}
        />
      </div>
    </>
  )
}
export default App
