import { execa } from 'execa';

execa('echo', ['test']).then(console.log);
