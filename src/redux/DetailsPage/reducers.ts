import { combineReducers } from 'redux'
import type { IMovieorTv, IPersonDetails, ImageDetails, MediaType, VideoDetails } from '../../Interfaces'

export interface IActionTypeDetails {
  type: string
  id: string
  data: IDetails
  destination: string
}

export interface IDetails {
  basic: IMovieorTv
  cast: IPersonDetails[]
  images: ImageDetails[]
  videos: VideoDetails[]
}

const makeParentReducer = (mediatype: MediaType) => (state: Map<string, IDetails> = new Map<string, IDetails>([]), action: IActionTypeDetails) => {
  if (action.type === `UPDATE_PARENT_${mediatype.toUpperCase()}`) {
    const newState = new Map(state)
    newState.set(action.id, action.data)
    return newState
  } else return state
}

const movieList = makeParentReducer("movie")
const tvList = makeParentReducer("tv")

export const detailsReducer = combineReducers({ movie: movieList, tv: tvList })
