'use strict';
var Filter = require('broccoli-filter');
var stripJsonComments = require('strip-json-comments');

function StripJsonCommentsFilter(inputTree, options) {
	if (!(this instanceof StripJsonCommentsFilter)) {
		return new StripJsonCommentsFilter(inputTree);
	}

	Filter.call(this, inputTree);

	this.inputTree = inputTree;
}

StripJsonCommentsFilter.prototype = Object.create(Filter.prototype);
StripJsonCommentsFilter.prototype.constructor = StripJsonCommentsFilter;

StripJsonCommentsFilter.prototype.extensions = ['json'];
StripJsonCommentsFilter.prototype.targetExtension = 'json';

StripJsonCommentsFilter.prototype.processString = function (str) {
	return stripJsonComments(str);
};

module.exports = StripJsonCommentsFilter;
