import { takeEvery, call, put } from 'redux-saga/effects'
import { type ISagaActionHome, GET_DATA_HOME } from './actions'
import { options } from '../../Constants'
import type { IMovieorTv } from '../../Interfaces'

async function fetchList (url: string): Promise<{ results: IMovieorTv[] }> {
  return await fetch(url, options).then(async (response) => await response.json())
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function * workGetMoviesTrending (action: ISagaActionHome) {
  const data: {
    results: IMovieorTv[]
  } = yield call(fetchList, action.url)
  const list = data.results
  yield put({ type: action.destination, list })
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function * homeSaga () {
  yield takeEvery(GET_DATA_HOME, workGetMoviesTrending)
}

export default homeSaga
