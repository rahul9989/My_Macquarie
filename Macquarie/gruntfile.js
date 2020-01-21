module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		// watch task
		watch: {
            sass: {
                files: ['assets/sass/*.scss'],
                tasks: ['sass'],
            }
        },

        // SASS compile
		sass: {                              // Task
            dist: {                            // Target
                options: {                       // Target options
                    style: 'compressed'      // expanded
                },
                files: {                         // Dictionary of files
                    'assets/css/custom.css': 'assets/sass/main.scss',      // 'destination': 'source'
                }
            }
        },

        // Concate Files
        concat: {
		    options: {
		      	separator: ';',
		    },
		    dist: {
		      	src: ['assets/js/jquery-3.3.1.min.js', 'assets/js/bootstrap.min.js'],
		      	dest: 'assets/js/plugin.js',
		    },
  		},

  		// Uglify Js 
  		uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },

            build: {
                src: 'assets/js/plugin.js',
                dest: 'assets/js/plugin.min.js'
            }
        }

	});

	// Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    
    // Default task(s).
    grunt.registerTask('default', ['sass', 'concat', 'uglify', 'watch' ]);
}