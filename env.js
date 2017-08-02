const minimist = require('minimist');
const processArgs = minimist(process.argv);

const src = 'src';
let env = 'prod';

if (processArgs.dev || processArgs.development) {
  env = 'dev';
}

module.exports = {
  env,
  src,
};
