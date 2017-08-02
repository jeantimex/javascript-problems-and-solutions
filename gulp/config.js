import environment from '../env';

const env = environment.env;
const src = environment.src;

const config = {
  env,
  src,

  test: {
    src: `${src}/**/*-test.js`,
  }
};

export default config;
