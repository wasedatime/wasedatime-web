type UserProfile = {
  name: string
  school: string
  email: string
  grade: string
  class_of: string
  languages: Array<{ language: string; level: string }>
  interests: string[]
}

export default UserProfile
