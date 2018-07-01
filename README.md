# Function arguments

Parses function arguments and returns an array.

## Instalation

```bash
npm i @alesmenzel/function-arguments
```

## Usage

Can parse ES5 named and unamed functions as well as ES6 arrow funtions and shorthand arrow functions.

```javascript
const functionArguments = require('@alesmenzel/function-arguments');


// ES5
const subject = function x(a, b, c) {};

functionArguments(subject);
// ["a", "b", "c"]


// ES6
const subject = (a, b, c) => {};

functionArguments(subject);
// ["a", "b", "c"]


// ES6 shorthand
const subject = a => a;

functionArguments(subject);
// ["a"]
```
