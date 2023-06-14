import type { IMovieorTv, IPersonDetails } from '../../Interfaces'

export interface IPersonPageData {
  basic: IPersonDetails
  movie: IMovieorTv[]
  tv: IMovieorTv[]
}

export interface IActionTypePerson {
  type: string
  id: string
  data: IPersonPageData
}

export const personReducer = (state: Map<string, IPersonPageData> = new Map<string, IPersonPageData>([]), action: IActionTypePerson): Map<string, IPersonPageData> => {
  if (action.type === `UPDATE_PERSON`) {
    const newState = new Map(state)
    newState.set(action.id, action.data)
    return newState
  } else return state
}
