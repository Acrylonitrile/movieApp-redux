import { combineReducers } from 'redux'
import type { IMovieorTv, IStoredMovie } from '../../Interfaces'
import { destinations } from './actions'

export interface IActionTypeHome {
  type: string
  list: IMovieorTv[]
}

const makeReducer = (destination: string) => (state: IStoredMovie = { list: [] as IMovieorTv[], hasFetched: false }, action: IActionTypeHome) => {
  const actionType = destination.toUpperCase()
  switch (action.type) {
    case actionType:
      return {
        list: action.list,
        hasFetched: true
      }
    default : return state
  }
}

export const movieTrendingDay = makeReducer(destinations.movie.trending.day)
export const movieTrendingWeek = makeReducer(destinations.movie.trending.week)
export const tvTrendingDay = makeReducer(destinations.tv.trending.day)
export const tvTrendingWeek = makeReducer(destinations.tv.trending.week)

const movieTrending = combineReducers({ day: movieTrendingDay, week: movieTrendingWeek })
const movieTopRated = makeReducer(destinations.movie.topRated)
const movieUpcoming = makeReducer(destinations.movie.upcoming)

const tvTrending = combineReducers({ day: tvTrendingDay, week: tvTrendingWeek })
const tvPopular = makeReducer(destinations.tv.popular)

const homeMovies = combineReducers({ trending: movieTrending, topRated: movieTopRated, upcoming: movieUpcoming })
const homeTV = combineReducers({ trending: tvTrending, popular: tvPopular })

export const homePageReducer = combineReducers({ movie: homeMovies, tv: homeTV })
