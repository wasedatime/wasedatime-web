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
import API from "@aws-amplify/api"
import { getIdToken, getUserAttr } from "wasedatime-ui"
import JobProps from "./types/job"

const App = () => {
  return (
    <div className="flex h-screen flex-col">
      <HashRouter>
        <InnerApp />
      </HashRouter>
    </div>
  )
}

const PageRoutes = ({
  jobData,
  profile,
  setProfile,
  isRegistered,
  onJobApplied,
}: CareerComponentProps) => {
  return (
    <Routes>
      <Route
        element={
          <Joblist
            jobData={jobData}
            profile={profile}
            setProfile={setProfile}
            isRegistered={isRegistered}
          />
        }
        path="/"
      />
      <Route
        element={
          <Jobdetail
            jobData={jobData}
            profile={profile}
            isRegistered={isRegistered}
            onJobApplied={onJobApplied}
          />
        }
        path="/:jobId"
      />
    </Routes>
  )
}

const InnerApp = () => {
  const { t, i18n } = useTranslation()
  const { theme, setTheme } = React.useContext(ThemeContext)
  const [isRegistered, setIsRegistered] = useState(false)
  const [jobData, setJobData] = useState<JobProps[]>([])

  const [profile, setProfile] = useState<UserProfile>({
    name: "",
    school: "",
    email: "",
    year: "",
    class_of: "",
    languages: [
      { language: "", level: "" },
      { language: "", level: "" },
      { language: "", level: "" },
    ],
    interests: [],
  })

  const fetchUserProfile = async () => {
    const idToken = await getIdToken()

    try {
      const res = await API.get("wasedatime-dev", "/profile", {
        headers: {
          "Content-Type": "application/json",
          Authorization: idToken,
        },
        response: true,
      })

      const data = res.data.data

      if (data) {
        while (data.languages.length < 3) {
          data.languages.push({ language: "", level: "" })
        }
        setProfile(data)
        setIsRegistered(true)
      } else {
        setIsRegistered(false)
      }
    } catch (error) {
      console.error(error)
    }
  }

  const fetchCareer = async () => {
    const idToken = await getIdToken()
    const info = await getUserAttr()
    const uid = info?.id

    try {
      const res = await API.get(
        "wasedatime-dev",
        `/career?type=internship&uid=${uid}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: idToken,
          },
          response: true,
        }
      )
      const data = res.data.data.Items
      setJobData(data)
    } catch (error) {
      console.error(error)
    }
  }

  const handleJobApplied = (jobId: string) => {
    const updatedJobs = jobData.map((job) => {
      if (job.job_id === jobId) {
        return { ...job, applied: true }
      }
      return job
    })
    setJobData(updatedJobs)
  }

  useEffect(() => {
    fetchUserProfile()
    fetchCareer()
  }, [])

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
      <div className="h-[calc(100vh-127px)] overflow-y-auto lg:h-full">
        <div className="container mx-auto px-2">
          {/* md:w-3/5 */}

          <PageRoutes
            jobData={jobData}
            profile={profile}
            setProfile={setProfile}
            isRegistered={isRegistered}
            onJobApplied={handleJobApplied}
          />
        </div>
      </div>
    </>
  )
}

export default App
