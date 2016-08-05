'use strict';
const path = require('path');
const gutil = require('gulp-util');
const through = require('through2');
const blast = require('font-blast');
const yaml = require('js-yaml');
const fs   = require('fs');

module.exports = function (dest, opts) {

	return through.obj(function (file, enc, cb) {
		if (file.isNull()) {
			cb(null, file);
			return;
		}

		if (file.isStream()) {
			cb(new gutil.PluginError('gulp-font-blast', 'Streaming not supported'));
			return;
		}

		try {
			var iconnames = require('js-yaml').safeLoad(fs.readFileSync(file.base + "icons.yml", 'utf8')).icons;
			var convertFilenames = {};
		
			var iconNamingConventions = yaml.safeLoad(file.base + "icons.yml").icons;
			iconnames.forEach(function (icon) {
				convertFilenames[icon.unicode] = icon.id;
			});
			blast(file.path.toString(), dest, {filenames: convertFilenames});
		} catch (err) {
			this.emit('error', new gutil.PluginError('gulp-<%= pluginName %>', err));
		}

		cb();

	});
};

module.exports.blast = blast;
