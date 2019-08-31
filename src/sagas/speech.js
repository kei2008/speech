import { put } from "redux-saga/effects";
import * as Action from "../actions";
import { test } from '../utils/test';

// speech.lang = "ja";

export function* startSpeech() {
  // speech.start();
  console.log('jjjjjjjjjjjjjjjjj');
  const speechResult = yield test();
  yield put(Action.speechRecognition(speechResult));
}

export function* stopSpeech() {
  yield console.log('llllllllllllllllooo');
  // speech.stop();
}

// async function setSpeechResult() {
//   const speechList = [];
//   const results =  await speechEventListener();
//   for (let i = 0; i < results.length; i++) {
//     speechList.push(results[i][0].transcript);
//   }
//   return speechList
// }

// async function speechEventListener() {
//   speech.onresults = event => {
//     return event.results;
//   }
// }


