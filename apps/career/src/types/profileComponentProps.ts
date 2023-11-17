import UserProfile from "./userProfile"

export interface ProfileComponentProps {
  profile: UserProfile
  setProfile: React.Dispatch<React.SetStateAction<UserProfile>>
  isRegistered?: boolean
  setIsRegistered?: React.Dispatch<React.SetStateAction<boolean>>
}

export default ProfileComponentProps
