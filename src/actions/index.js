import * as actionTypes from '../constants/actionTypes';

export const onStartSpeechClick = () => ({
  type: actionTypes.START_SPEECH
});
export const speechRecognition = (speechList) => ({
  type: actionTypes.SPEECH_RECOGNITION,
  speechList
});
export const onStopSpeechClick = () => ({
  type: actionTypes.STOP_SPEECH
});
