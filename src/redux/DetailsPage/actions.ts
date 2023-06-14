import type { MediaType } from "../../Interfaces"
export const GET_DETAILS = "GET_DETAILS"

export interface ISagaActionDetails {
  type: string
  mediatype: MediaType
  id: string
}

export const getDetails = (mediatype: MediaType, id: string): ISagaActionDetails => {
  return {
    type: GET_DETAILS,
    mediatype,
    id
  }
}
