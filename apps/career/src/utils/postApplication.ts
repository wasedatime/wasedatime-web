import API from "@aws-amplify/api"
import UserProfile from "@app/types/userProfile"
import JobProps from "@app/types/job"

export const postApplication = async (
  profileData: UserProfile,
  jobData: JobProps,
  idToken: string
) => {
  const applicationData = {
    title: jobData.title,
    job_id: jobData.job_id,
    company: jobData.company,
    created_at: jobData.created_at,
    email: profileData.email,
    name: profileData.name,
    agreed: true,
  }
  try {
    console.log(applicationData)
    const response = await API.post("wasedatime-dev", `/career`, {
      body: { data: applicationData },
      headers: {
        "Content-Type": "application/json",
        Authorization: idToken,
      },
    })

    console.log(response)
  } catch (error) {
    console.error("An error occurred:", error)
  }
}

export default postApplication
