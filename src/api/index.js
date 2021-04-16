import { baseUrl } from "../constants"

export const getStatus = async () => {
  const response = await fetch(baseUrl + `/cvs-vaccine-status-updater/DC`)

  if (!response.ok) {
    throw new Error("Something went wrong!")
  }
  const status = await response.json()

  return status
}
