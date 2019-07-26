const ProxyPolyfill = require("proxy-polyfill/src/proxy");
/**
 * Takes an object and creates a webworker that intercepts its method calls and processes them through a worker instead.
 * @param {Object} object An object who's methods are to be processed through a WebWorker
 */
const createWorker = object => {
  // If we don't have workers available, fall back to returning the object
  if (!window.Worker) {
    return object;
  }
};

module.exports = { createWorker };
