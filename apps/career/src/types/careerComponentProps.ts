import JobProps from "./job"
import type UserProfile from "./userProfile"

type CareerComponentProps = {
  jobData: JobProps
  profile: UserProfile
  setProfile: React.Dispatch<React.SetStateAction<UserProfile>>
  isRegistered?: boolean
}

export default CareerComponentProps
