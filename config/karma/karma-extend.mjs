import baseConfig from './karma-base.mjs';

export default function extendConfiguration(extendedConfig) {
  'use strict';
  // Overrides the base configuration for karma with the given properties
  for (const i in baseConfig) {
    if (typeof extendedConfig[i] === 'undefined') {
      extendedConfig[i] = baseConfig[i];
    }
  }
  return extendedConfig;
}