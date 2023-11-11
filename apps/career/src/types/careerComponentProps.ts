import type UserProfile from "./userProfile"

type CareerComponentProps = {
  profile: UserProfile
  setProfile: React.Dispatch<React.SetStateAction<UserProfile>>
  isRegistered?: boolean
}

export default CareerComponentProps
