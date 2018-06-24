import { takeEvery } from "redux-saga";
import * as Speech from './speech';

export default function* rootSaga() {
  yield all([
    takeEvery(START_SPEECH, Speech.startSpeech),
    takeEvery(STOP_SPEECH, Speech.stopSpeech)
  ])
}
