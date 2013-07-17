
module.exports = function(grunt) {
	'use strict';

	// Project configuration.
	grunt.initConfig({
		nodeunit: {
			files: ['test/**/*_test.js']
		},
		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
			gruntfile: {
				src: 'Gruntfile.js'
			},
			lib: {
				src: ['lib/**/*.js']
			},
			test: {
				src: ['test/**/*.js']
			}
		},
		requirejs: {
			build: {
				options: {
					baseUrl: 'public/js',
					mainConfigFile: 'public/js/grunticon-ui.js',
					out: 'public/js/grunticon-ui.min.js',
					name: 'grunticon-ui'
				}
			}
		},
		jst: {
			compile: {
				options: {
					amd: true
				},
				files: {
					'public/js/templates.js': 'templates/**/*.html'
				}
			}
		},
		watch: {
			gruntfile: {
				files: '<%= jshint.gruntfile.src %>',
				tasks: ['jshint:gruntfile']
			},
			lib: {
				files: '<%= jshint.lib.src %>',
				tasks: ['jshint:lib', 'nodeunit']
			},
			pub: {
				files: ['public/js/**/*.js', '!public/js/grunticon-ui.min.js'],
				tasks: [ 'default' ]
			},
			test: {
				files: '<%= jshint.test.src %>',
				tasks: ['jshint:test', 'nodeunit']
			}
		}
	});

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-contrib-nodeunit');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-jst');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Default task.
	grunt.registerTask('default', ['jshint', 'nodeunit', 'jst:compile', 'requirejs:build']);
	grunt.registerTask('test', ['nodeunit']);

};
