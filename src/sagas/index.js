import { takeEvery, all } from "redux-saga/effects";
import * as Speech from './speech';
import * as actionTypes from '../constants/actionTypes';

export default function* rootSaga() {
  yield all([
    takeEvery(actionTypes.START_SPEECH, Speech.startSpeech),
    takeEvery(actionTypes.STOP_SPEECH, Speech.stopSpeech)
  ])
}
