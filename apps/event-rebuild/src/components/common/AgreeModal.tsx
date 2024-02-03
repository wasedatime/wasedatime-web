import React from "react"
import Modal from "./Modal"
import postApplication from "@app/utils/postApplication"
import JobProps from "@app/types/job"
import UserProfile from "@app/types/userProfile"
import { getIdToken } from "wasedatime-ui"

type AgreeModalProps = {
  onDisagree: () => void
  onAgree: () => void
  job: JobProps
  profile: UserProfile
}

const AgreeModal: React.FC<AgreeModalProps> = ({
  onDisagree,
  onAgree,
  job,
  profile,
}) => {
  const handleAgree = async () => {
    try {
      // Check if job.apply is a URL and redirect if so
      if (job.apply) {
        window.open(job.apply, "_blank") // Open the URL in a new tab
        onAgree() // Optionally call onAgree if needed after redirection
        return // Return early to avoid executing the rest of the function
      }

      const idToken = await getIdToken() // Continue with existing logic if job.apply is not a URL
      if (idToken) {
        await postApplication(profile, job, idToken)
        onAgree()
      } else {
        console.error("NO ID TOKEN")
      }
    } catch (error) {
      console.error("Error submitting application:", error)
    }
  }

  return (
    <Modal>
      <div className="standard-style flex items-center justify-between rounded-t border-b border-solid p-5">
        <h3 className="text-3xl font-semibold">Terms and Policy Agreement</h3>
      </div>

      <div className="standard-style relative flex-auto p-6">
        <p className="my-4 text-xl leading-relaxed">
          Agreement for Submission of Profile Information
        </p>
        <p className="text-lg">
          By clicking the "Agree" button below, you acknowledge and consent to
          the following terms:
        </p>
        <ul className="list-inside list-disc text-lg">
          <li>
            The personal and professional information you have provided in your
            profile, including but not limited to your name, email address,
            professional history, and qualifications, will be shared with the
            company associated with the job you are applying for.
          </li>
          <li>
            This information will be used by the company solely for the purpose
            of evaluating your job application and considering your suitability
            for the position.
          </li>
          <li>
            Your information will be treated in accordance with our Privacy
            Policy, which outlines how we collect, use, and protect your
            personal data.
          </li>
          <li>
            You affirm that all information provided in your profile is
            accurate, current, and complete, and does not violate any laws or
            regulations.
          </li>
          <li>
            You understand that providing false or misleading information may
            lead to a rejection of your application or, if employed,
            disciplinary action, up to and including termination.
          </li>
        </ul>
        <p className="mt-4 text-lg">
          Please review your profile information thoroughly before agreeing. By
          submitting your application, you give us consent to process and
          forward your profile data to the respective company for the current
          job application.
        </p>
        {/* Additional content or legal disclaimers can be included here */}
      </div>

      <div className="standard-style flex items-center justify-end rounded-b border-t border-solid p-6">
        <button
          className="background-transparent mr-1 mb-1 px-6 py-2 text-sm font-bold uppercase text-red-500 outline-none hover:-translate-y-1.5 focus:outline-none"
          onClick={onDisagree}
        >
          Disagree
        </button>
        <button
          className="mr-1 mb-1 rounded bg-green-500 px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none hover:-translate-y-1.5 hover:shadow-lg focus:outline-none active:bg-green-600"
          onClick={handleAgree}
        >
          Agree
        </button>
      </div>
    </Modal>
  )
}

export default AgreeModal
