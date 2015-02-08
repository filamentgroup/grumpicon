
module.exports = function(grunt) {
	"use strict";

	var to5ify = require("6to5ify");

	// Project configuration.
	grunt.initConfig({
		nodeunit: {
			files: ["test/**/*_test.js"]
		},
		jshint: {
			options: {
				jshintrc: ".jshintrc"
			},
			gruntfile: {
				src: "Gruntfile.js"
			},
			lib: {
				src: ["lib/**/*.js"]
			},
			test: {
				src: ["test/**/*.js"]
			}
		},
		handlebars: {
			compile: {
				files: {
					"public/js/templates.js": [
						"templates/**/*",
						"node_modules/grunt-grunticon/example/**.hbs",
						"node_modules/grunt-grunticon/example/output/grunticon.loader.js"
					]
				},
				options: {
					commonjs: true
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
					"public/dist/main.css": ["public/css/main.css"]
				}
			}
		},
		browserify: {
			build: {
				files: {
					"public/dist/grumpicon.js": "public/js/app.js"
				},
				options: {
					basedir: "public/js/",
					transform: [to5ify]
				}
			}
		},
		uglify: {
			build: {
				files: {
					"public/dist/grumpicon.min.js": "public/dist/grumpicon.js"
				}
			}
		},
		watch: {
			gruntfile: {
				files: "<%= jshint.gruntfile.src %>",
				tasks: ["jshint:gruntfile"]
			},
			lib: {
				files: "<%= jshint.lib.src %>",
				tasks: ["jshint:lib", "nodeunit"]
			},
			pub: {
				files: ["public/js/**/*.js", "!public/js/grunticon-ui.min.js"],
				tasks: [ "default" ]
			},
			test: {
				files: "<%= jshint.test.src %>",
				tasks: ["jshint:test", "nodeunit"]
			}
		}
	});

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks("grunt-contrib-nodeunit");
	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-contrib-handlebars");
	grunt.loadNpmTasks("grunt-modernizr");
	grunt.loadNpmTasks("grunt-contrib-cssmin");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-browserify");
	grunt.loadNpmTasks("grunt-contrib-watch");

	// Default task.
	grunt.registerTask("default", ["jshint", "nodeunit", "handlebars:compile", "browserify:build", "uglify", "cssmin"]);
	grunt.registerTask("test", ["nodeunit"]);

};
