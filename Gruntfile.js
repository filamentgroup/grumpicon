
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
		copy: {
			build: {
				src: 'node_modules/grunt-contrib-handlebars/node_modules/handlebars/dist/handlebars.js',
				dest: 'public/lib/handlebars/handlebars.js'
			}
		},
		requirejs: {
			build: {
				options: {
					baseUrl: 'public/js',
					mainConfigFile: 'public/js/config.js',
					out: 'public/dist/grumpicon.js',
					name: 'grumpicon',
					include: [
						"grumpicon",
						"countView",
						"downloadButtonView",
						"downloadView",
						"listView",
						"preferencesModel",
						"preferencesView",
						"resultsView",
						"svgCollection",
						"svgModel",
						"toggleView",
						"uploadView"
					],
					optimize: 'uglify2',
					preserveLicenseComments: false
				}
			}
		},
		handlebars: {
			compile: {
				files: {
					'public/js/templates.js': 'templates/**/*.html'
				}
			}
		},
		modernizr: {
			build: {
				devFile: "public/lib/modernizr/modernizr.js",
				outputFile: "public/js/modernizr.js",
				parseFiles: false,
				tests: [
					"a_download",
					"blob-constructor",
					"draganddrop",
					"file_api"
				]
			}
		},
		cssmin: {
			build: {
				files: {
					'public/dist/main.css': ['public/css/main.css']
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
	grunt.loadNpmTasks('grunt-contrib-handlebars');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-modernizr');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Default task.
	grunt.registerTask('default', ['jshint', 'nodeunit', 'copy', 'handlebars:compile', 'requirejs:build', 'cssmin']);
	grunt.registerTask('stage', ['default']);
	grunt.registerTask('test', ['nodeunit']);

};
