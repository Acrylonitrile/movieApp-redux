import { takeEvery, call, put, all } from 'redux-saga/effects'
import { GET_PERSON, type ISagaActionPerson } from './actions'
import type { IMovieorTv, IPersonDetails } from '../../Interfaces'
import type { IActionTypePerson, IPersonPageData } from './reducers'
import { baseUrl } from '../../Constants'
import FetchData from '../../fetchData'

const fetchBasicPerson = async (id: string): Promise<IPersonDetails> => await FetchData(`${baseUrl}person/${id}`) as IPersonDetails
const fetchPersonMovies = async (id: string): Promise<IMovieorTv[]> => (await FetchData(`${baseUrl}person/${id}/movie_credits`)).cast
const fetchPersonTv = async (id: string): Promise<IMovieorTv[]> => (await FetchData(`${baseUrl}person/${id}/tv_credits`)).cast

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function * workGetPerson (action: ISagaActionPerson) {
  const [basic, movie, tv]: [IPersonDetails, IMovieorTv[], IMovieorTv[]] = yield all([call(fetchBasicPerson, action.id),
    call(fetchPersonMovies, action.id),
    call(fetchPersonTv, action.id)
  ])
  const data: IPersonPageData = {
    basic,
    movie,
    tv
  }
  const reducerAction: IActionTypePerson = { type: `UPDATE_PERSON`, id: action.id, data }
  yield put(reducerAction)
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function * personDetailSaga () {
  yield takeEvery(GET_PERSON, workGetPerson)
}

export default personDetailSaga
