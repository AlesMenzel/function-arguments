const acorn = require('acorn');

const isFunction = require('./helper/is-function');

/**
 * Handles identifiers, i.e. (a) =>
 *
 * @param {Object} node AST Node
 */
const identifier = node => node.name;

/**
 * Handles assignment expression, i.e. (a = 5) =>
 *
 * @param {Object} node AST Node
 */
const assignmentExpression = node => node.left.name;

const mapStrategies = {
  Identifier: identifier,
  AssignmentPattern: assignmentExpression,
};

/**
 * Maps the nodes to final output
 *
 * @param {Array} params Array of nodes
 */
const mapParams = params =>
  params.map(node => {
    const strategy = mapStrategies[node.type];

    if (!strategy) {
      return undefined;
    }

    return strategy(node);
  });

/**
 * Handles function declarations, i.e. function xyz(){}
 *
 * @param {Object} node AST Node
 */
const functionDeclaration = node => node.params;

/**
 * Handles arrow functions and shorthand arrow functions, i.e. () => {}
 *
 * @param {Object} node AST Node
 */
const expressionStatement = node => node.expression.params;

const strategies = {
  FunctionDeclaration: functionDeclaration,
  ExpressionStatement: expressionStatement,
};

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
  const ast = acorn.parse(`(${stringFn})`);
  const node = ast.body[0];
  const strategy = strategies[node.type];

  if (!strategy) {
    throw new Error(`Could not parse function arguments: ${stringFn}`);
  }

  const params = strategies[node.type](node);

  return mapParams(params);
};

module.exports = resolveArguments;
