export const GET_DATA_HOME = 'GET_DATA_HOME'

export const destinations = {
  movie: {
    trending: {
      day: 'MOVIE_TRENDING_DAY',
      week: 'MOVIE_TRENDING_WEEK'
    },
    topRated: 'MOVIE_TOP_RATED',
    upcoming: 'MOVIE_UPCOMING',
    popular: 'MOVIE_POPULAR'
  },
  tv: {
    trending: {
      day: 'TV_TRENDING_DAY',
      week: 'TV_TRENDING_WEEK'
    },
    topRated: 'TV_TOP_RATED',
    upcoming: 'TV_UPCOMING',
    popular: 'TV_POPULAR'
  }
}

export interface ISagaActionHome {
  type: string
  url: string
  destination: string
}

export const getDataHome = (url: string, destination: string): ISagaActionHome => ({
  type: GET_DATA_HOME,
  url,
  destination
})
