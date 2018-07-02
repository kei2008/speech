import speech from '@google-cloud/speech';
import record from 'node-record-lpcm16';

export function speechRecognize() {
  const client = new speech.SpeechClient({
    projectId: projectId,
    keyFilename: './keyfile.json'
  });

  const request = {
    config: {
      encoding: 'LINEAR16',
      sampleRateHertz: SAMPLE_RATE,
      languageCode: 'ja-jp'
    },
    interimResults: false
  };

  const recognizeStream = client
    .createRecognizeStream(request)
    .on('error', console.error)
    .on('data', (data) => {
      process.stdout.write(
        data.results[0] && data.results[0].alternatives[0]
          ? `Transcription: ${data.results[0].alternatives[0].transcript}\n`
          : `\n\nReached transcription time limit, press Ctrl+C\n`
      )
    });

  record
    .start({
      sampleRate: SAMPLE_RATE,
      thresholdStart: 0.2,
      thresholdEnd: 0.1,
      silence: '10.0',
      recordProgram: 'rec'
    })
    .on('error', console.error)
    .pipe(recognizeStream);
}
