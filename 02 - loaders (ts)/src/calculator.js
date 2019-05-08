import { pi } from './constants';
import { circleSquare } from './math-utils';
import { getUser } from './users.ts';

console.log(pi, circleSquare(5));
console.log('user', getUser('555'));
