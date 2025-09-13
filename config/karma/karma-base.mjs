import path from 'path';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* eslint no-process-env:0 */
process.env.CHROME_BIN = puppeteer.executablePath();

export default {
  basePath: '../../',
  frameworks: ['mocha'],
  reporters: ['progress', 'coverage'],
  files: [
    // Include source files first for browser tests
    { pattern: 'src/**/*.js', type: 'module' },
    // Then test files
    { pattern: 'test/**/*_test.js', type: 'module' }
  ],

  plugins: [
    'karma-mocha',
    'karma-chrome-launcher',
    'karma-firefox-launcher',
    'karma-coverage'
  ],

  preprocessors: {
    'src/**/*.js': ['coverage']
  },

  coverageReporter: {
    dir: './coverage',
    reporters: [
      {type: 'html', subdir: 'html'},
      {type: 'lcov', subdir: '.'},
      {type: 'text', subdir: '.', file: 'text.txt'},
      {type: 'text-summary', subdir: '.', file: 'text-summary.txt'}
    ]
  },

  client: {
    mocha: {
      opts: 'test/mocha.opts'
    }
  }
};