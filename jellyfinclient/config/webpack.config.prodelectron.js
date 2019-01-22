'use strict';

let baseconfig = require('./webpack.config.prod');


baseconfig['target'] = "electron-renderer";

// This is the production configuration.
// It compiles slowly and is focused on producing a fast and minimal bundle.
// The development configuration is different and lives in a separate file.
module.exports = baseconfig;
