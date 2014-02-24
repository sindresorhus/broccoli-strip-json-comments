'use strict';
var assert = require('assert');
var fs = require('fs');
var rimraf = require('rimraf');

afterEach(function () {
	rimraf.sync('temp');
});

it('should strip JSON comments', function () {
	assert.equal(
		fs.readFileSync('temp/fixture.json', 'utf8'),
		fs.readFileSync('fixture/expected.json', 'utf8')
	);
});
