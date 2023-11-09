import type UserProfile from "./userProfile"

type CareerComponentProps = {
  profile: UserProfile
  setProfile: React.Dispatch<React.SetStateAction<UserProfile>>
}

export default CareerComponentProps
