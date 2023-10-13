import React, { useEffect, useContext } from "react"
import {
  HashRouter,
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom"
import { LoadingSpinner } from "wasedatime-ui"
import { ThemeContext } from "@app/utils/theme-context"
import Joblist from "@app/components/Joblist"
import Jobdetail from "@app/components/Jobdetail"

type Props = {}

const NotFound = () => {
  const { theme } = React.useContext(ThemeContext)
  const navigate = useNavigate()
  useEffect(() => navigate("/"))

  return <LoadingSpinner theme={theme} message="Not found! Redirecting..." />
}

const App = (props: Props) => {
  const PageRoutes = () => {
    return (
      <HashRouter>
        <Routes>
          <Route element={<Joblist />} path="/" />
          <Route element={<Jobdetail />} path="/:jobId" />
          <Route element={<NotFound />} path="*" />
        </Routes>
      </HashRouter>
    )
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col md:w-3/5">
        <PageRoutes />
      </div>
    </div>
  )
}

export default App
