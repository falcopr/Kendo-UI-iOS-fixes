'use strict';

const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');

const config = require('./webpack.config.js');
config.mode = 'development';

const options = {
  contentBase: './wwwroot',
  hot: true,
  // host: 'localhost',
  host: '0.0.0.0',
  historyApiFallback: true
};

const argv = require('yargs')
  .usage('Usage: $0 --port=[num]')
  .alias('p', 'port')
  .default({
    port: 8082
  })
  .argv;

WebpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const server = new WebpackDevServer(compiler, options);

server.listen(argv.port, options.host, () => {
  console.log(`Start webclient on port ${options.host}:${argv.port}!`);
});

process.on('SIGINT', () => {
  console.log('Gracefully shutting down from SIGINT (Ctrl-C)');
  console.log('Server stopped!');

  process.exit();
});
