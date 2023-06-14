import { takeEvery, call, put, all } from 'redux-saga/effects'
import { GET_DETAILS, type ISagaActionDetails } from './actions'
import type { IMovieorTv, IPersonDetails, ImageDetails, MediaType, VideoDetails } from '../../Interfaces'
import type { IDetails } from './reducers'
import { baseUrl } from '../../Constants'
import FetchData from '../../fetchData'

const fetchBasic = async (id: string, mediatype: MediaType): Promise<IMovieorTv> => await FetchData(`${baseUrl}${mediatype}/${id}`)
const fetchCast = async (id: string, mediatype: MediaType): Promise<IPersonDetails[]> => (await FetchData(`${baseUrl}${mediatype}/${id}/credits`)).cast
const fetchImages = async (id: string, mediatype: MediaType): Promise<ImageDetails[]> => (await FetchData(`${baseUrl}${mediatype}/${id}/images`)).backdrops
const fetchVideos = async (id: string, mediatype: MediaType): Promise<VideoDetails[]> => (await FetchData(`${baseUrl}${mediatype}/${id}/videos`)).results

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function * workGetDetails (action: ISagaActionDetails) {
  const [basic, cast, images, videos]: [IMovieorTv, IPersonDetails[], ImageDetails[], VideoDetails[]] = yield all([call(fetchBasic, action.id, action.mediatype),
    call(fetchCast, action.id, action.mediatype),
    call(fetchImages, action.id, action.mediatype), call(fetchVideos, action.id, action.mediatype)
  ])
  const data: IDetails = {
    basic,
    cast,
    images,
    videos
  }
  console.log(`UPDATE_PARENT_${action.mediatype.toUpperCase()}`)
  yield put({ type: `UPDATE_PARENT_${action.mediatype.toUpperCase()}`, id: action.id, data })
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function * detailSaga () {
  yield takeEvery(GET_DETAILS, workGetDetails)
}

export default detailSaga
