import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { FETCH_USER_PROFILE } from "../actions/types";
import { setUserProfile } from "../actions";

function* fetchUserProfile() {
    const response = yield call(axios.get, "https://api.myjson.com/bins/y4q7g");
    yield put(setUserProfile(response.data));
}
export function* watchFetchUserProfile() {
    yield takeEvery(FETCH_USER_PROFILE, fetchUserProfile);
}