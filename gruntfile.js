const sass = require('node-sass');
module.exports = function (grunt) {
	require('load-grunt-tasks')(grunt);
	grunt.initConfig({
		sass: {
			options: {
				implementation: sass,
				sourceMap: true
			},
			dist: {
				files: {
					'docs/main.css': 'source/**/main.scss',
					'docs/index.css': 'source/index.scss',
					'docs/contact.css': 'source/contact.scss'
				}
			}
		}
	});

	grunt.registerTask('default', ['sass']);
}
