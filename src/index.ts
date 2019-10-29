var xml = require('xml');
var Base = require('mocha').reporters.Base;
var fs = require('fs');
var path = require('path');
var debug = require('debug')('mocha-junit-reporter');
var md5 = require('md5');
var stripAnsi = require('strip-ansi');
