const conf = require('./config');

const isProduction = conf.env === 'production';

const mozlog = require('mozlog')({
  app: 'FirefoxSend',
  level: isProduction ? 'TRACE' : 'verbose',
  fmt: isProduction ? 'heka' : 'pretty',
  debug: !isProduction
});

module.exports = mozlog;
