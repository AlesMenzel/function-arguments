/* eslint-disable func-names, no-unused-vars */

const { expect } = require('chai');

const isFunction = require('./function-arguments');

describe('function-arguments', () => {
  it('should handle unnamed ES5 function', () => {
    let subject;
    let result;

    subject = function() {};
    result = isFunction(subject);
    expect(result).to.be.deep.equal([]);

    subject = function(a) {};
    result = isFunction(subject);
    expect(result).to.be.deep.equal(['a']);

    subject = function(a, b) {};
    result = isFunction(subject);
    expect(result).to.be.deep.equal(['a', 'b']);
  });

  it('should handle names ES5 function', () => {
    let subject;
    let result;

    subject = function x() {};
    result = isFunction(subject);
    expect(result).to.be.deep.equal([]);

    subject = function x(a) {};
    result = isFunction(subject);
    expect(result).to.be.deep.equal(['a']);

    subject = function x(a, b) {};
    result = isFunction(subject);
    expect(result).to.be.deep.equal(['a', 'b']);
  });

  it('should handle names ES6 arrow function', () => {
    let subject;
    let result;

    subject = () => {};
    result = isFunction(subject);
    expect(result).to.be.deep.equal([]);

    // prettier-ignore
    subject = (a) => {};
    result = isFunction(subject);
    expect(result).to.be.deep.equal(['a']);

    subject = a => {};
    result = isFunction(subject);
    expect(result).to.be.deep.equal(['a']);

    subject = a => a;
    result = isFunction(subject);
    expect(result).to.be.deep.equal(['a']);

    subject = (a, b) => {};
    result = isFunction(subject);
    expect(result).to.be.deep.equal(['a', 'b']);
  });
});
