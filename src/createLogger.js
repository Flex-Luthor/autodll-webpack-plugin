import isFunction from 'lodash/isFunction';

const log = (msg) => {
  console.log('AutoDllPlugin:', msg);
};

log.tap = (msg) => res => {
  log(isFunction(msg) ? msg(res) : msg);
  return res;
};

const createLogger = showLogs => {
  if (!showLogs) {
    const log = function () {};
    log.tap   = function () {};
    return log;
  }

  return log;
};

export default createLogger;
