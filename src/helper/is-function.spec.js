/* eslint-disable func-names */
const { expect } = require('chai');

const isFunction = require('./is-function');

describe('is-function', () => {
  it('should return true for function', () => {
    const subject = function() {};

    const result = isFunction(subject);
    expect(result).to.be.true;
  });

  it('should return true for arrow function', () => {
    const subject = () => {};

    const result = isFunction(subject);
    expect(result).to.be.true;
  });

  it('should return true for named function', () => {
    const subject = function x() {};

    const result = isFunction(subject);
    expect(result).to.be.true;
  });

  it('should return false for object', () => {
    const subject = {};

    const result = isFunction(subject);
    expect(result).to.be.false;
  });

  it('should return false for primitives', () => {
    let result;
    result = isFunction(1);
    expect(result).to.be.false;
    result = isFunction(5.3);
    expect(result).to.be.false;
    result = isFunction(0);
    expect(result).to.be.false;
    result = isFunction('asdad');
    expect(result).to.be.false;
    result = isFunction('');
    expect(result).to.be.false;
    result = isFunction(false);
    expect(result).to.be.false;
    result = isFunction(true);
    expect(result).to.be.false;
    result = isFunction(null);
    expect(result).to.be.false;
    result = isFunction(undefined);
    expect(result).to.be.false;
    result = isFunction(NaN);
    expect(result).to.be.false;
  });
});
