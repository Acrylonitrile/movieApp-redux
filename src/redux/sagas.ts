import { call, all } from 'redux-saga/effects'
import homeSaga from './HomePage/sagas'
import detailSaga from './DetailsPage/sagas'
import personDetailSaga from './PersonPage/sagas'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function * rootSaga () {
  yield all([call(homeSaga), call(detailSaga), call(personDetailSaga)])
}

export default rootSaga
