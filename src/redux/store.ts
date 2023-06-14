import { applyMiddleware, combineReducers, createStore } from "@reduxjs/toolkit"
import { homePageReducer } from "./HomePage/reducers"
import createSagaMiddleware from "redux-saga"

import { type IPersonPageData, personReducer } from "./PersonPage/reducers"
import type { IStoredMovie } from "../Interfaces"
import rootSaga from "./sagas"
import { type IDetails, detailsReducer } from "./DetailsPage/reducers"

const sagaMiddleware = createSagaMiddleware()
const rootreducer = combineReducers({
  home: homePageReducer,
  details: detailsReducer,
  persons: personReducer
})
export const store = createStore(rootreducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

export interface IStore {
  home: {
    movie: {
      trending: {
        day: IStoredMovie
        week: IStoredMovie
      }
      topRated: IStoredMovie
      upcoming: IStoredMovie
      popular: IStoredMovie
    }
    tv: {
      trending: {
        day: IStoredMovie
        week: IStoredMovie
      }
      topRated: IStoredMovie
      upcoming: IStoredMovie
      popular: IStoredMovie
    }
  }
  details: {
    movie: Map<string, IDetails>
    tv: Map<string, IDetails>
  }
  persons: Map<string, IPersonPageData>
}

export type AppDispatch = typeof store.dispatch
