import * as actionTypes from '../constants/actionTypes';

const initialSpeechState = {
  speechList: [],
  isRecording: false 
}

const speech = (state = initialSpeechState, action) => {
  switch(action.type) {
    case actionTypes.START_SPEECH:
      return {
        ...state,
        isRecording: true
      }
    case actionTypes.SPEECH_RECOGNITION:
      return {
        ...state,
        speechList: action.resultSpeechList
      }
    case actionTypes.STOP_SPEECH:
      return {
        ...state,
        isRecording: false
      }
    default:
      return state;
  }
}

export default speech;
