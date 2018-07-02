import * as record from 'node-record-lpcm16';
import * as fs from 'fs';

export async function test() {
  var file = fs.createWriteStream('test.raw', { encoding: 'binary' });

  console.log('aaaaaaaaaaaaaaaaaa');
  record.start({
    sampleRate : 44100,
    verbose : true,
    recordProgram: 'sox'
  })
  .pipe(file);
}
