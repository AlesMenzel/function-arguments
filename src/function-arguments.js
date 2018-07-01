const isFunction = require('./helper/is-function');

/**
 * Parses function and extracts list of arguments
 *
 * @param {Function} fn
 */
const resolveArguments = fn => {
  if (!isFunction(fn)) {
    throw new Error(
      `A function must be passed to resolve arguments. Passed type '${typeof fnc}'.`
    );
  }

  const stringFn = fn.toString();

  // ES5 function: function (a, b, c) {}
  let match = stringFn.match(/^function.*?\(([\s\S]*?)\)/);
  // ES6 function: (a, b, c) => {}
  if (!match) match = stringFn.match(/^\(([\s\S]*?)\)\s*=>/);
  // ES6 shorthand function: a =>
  if (!match) match = stringFn.match(/^(\S*?)\s*=>/);

  if (!match) {
    throw new Error(`Could not parse function arguments: ${stringFn}`);
  }

  return match[1]
    .split(',')
    .filter(v => v)
    .map(str => str.trim());
};

module.exports = resolveArguments;
