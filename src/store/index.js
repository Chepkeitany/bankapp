import { createStore, applyMiddleware} from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import reducer from '../reducers';
import { watchFetchUserProfile } from "../sagas";

const initialState = {}
const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, initialState, applyMiddleware(sagaMiddleware, logger));
sagaMiddleware.run(watchFetchUserProfile);
export default store;