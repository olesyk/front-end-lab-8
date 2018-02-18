'use strict'
const getClosestToZero = (...values) => values.sort((a,b) => Math.abs(a) - Math.abs(b))[0];