import UserProfile from "./userProfile"

export interface ProfileComponentProps {
  profile: UserProfile
  setProfile: React.Dispatch<React.SetStateAction<UserProfile>>
  isRegistered?: boolean // Include only if needed in both components
}

export default ProfileComponentProps
