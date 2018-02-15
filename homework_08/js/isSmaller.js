'use strict'
const isBigger = (a, b) => a > b;
const isSmaller = (a, b) => a !== b ? !isBigger(a, b) : false;