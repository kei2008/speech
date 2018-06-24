import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions';
import * as message from '../constants/message';
import SpeechText from '../components/speech_text';
import RecordingButton from '../components/recording_btn';


class SpeechContainer extends Component {
  
  render() {
    const { speech, actions } = this.props;
    let buttonComponent;
    const textComponent = [];
    if(speech.isRecording) {
      buttonComponent = 
        <RecordingButton buttonName={message.STOP_SPEECH_MESSAGE}
        onClick={() => actions.onStopSpeechClick()} />;
    } else {
      buttonComponent = 
        <RecordingButton buttonName={message.START_SPEECH_MESSAGE}
        onClick={() => actions.onStartSpeechClick()} />;
    }
    if(speech.speechList){
      for(let speechText of speech.speechList) {
        textComponent.push(<SpeechText text={speechText} />);
      }
    } 

    return (
      <div>
        <div>
          {textComponent}
        </div>
        {buttonComponent}
      </div>
    )
  }
}

const mapState = (state) => ({
  speech: state.speech,
});

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  }
}

export default connect(mapState, mapDispatch)(SpeechContainer);
