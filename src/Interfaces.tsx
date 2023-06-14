export type MediaType = "movie" | "tv"
export type TimePeriod = "day" | "week"

export interface IMovieorTv {
  id: number
  title?: string
  name?: string
  overview: string
  backdrop_path: string
  poster_path: string
  genre_ids: number[]
  media_type: MediaType
  genres: Array<{
    id: number
    name: string
  }>
}
// interface Imovie extends BaseInterface{
//   title:string;
// }

export interface Urls {
  trending: string
  topRated: string
  upcoming?: string
  genreList: string
  popular: string
}

export interface IPageDetails {
  id: string
  mediatype: MediaType
}

export interface ImageDetails {
  file_path: string
}

export interface VideoDetails {
  name: string
  key: string
}

export interface IPersonDetails {
  name: string
  profile_path: string
  character: string
  id: number
  biography: string
  birthday: string
  place_of_birth: string
  gender: 1 | 2
}

export interface IStoredMovie {
  list: IMovieorTv[]
  hasFetched: boolean
}
