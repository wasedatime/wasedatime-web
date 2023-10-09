import { API } from "@aws-amplify/api"

export const fetchNotificaiton = async (lastCheckDate: string) => {
  const res = await API.get(
    "wasedatime-dev",
    `/forum/notify?lastChecked=${lastCheckDate}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
      response: true,
    }
  )

  const threadCount = res.data.data

  return threadCount
}
