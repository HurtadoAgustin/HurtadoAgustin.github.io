#!/usr/bin/env node
let random = require('../src/index.js');

for (let i = 0; i < 100; i++) {
  random.randomMsg();
}