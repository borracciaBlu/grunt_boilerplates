module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less : {
            development : {
                options: {
                    paths: ["dist/css"],
                    cleancss: true
                },
                files: {
                    "dist/css/styles.css": "app/less/main.less"
                } 
            }
        },
        jshint: {
            all: ['Gruntfile.js', 'app/lib/**/*.js', 'app/**/*.js'],
            afterconcat: ['app/tmp/<%= pkg.name %>.js']
        },
        concat: {
            options: {
                separator: "\n", //add a new line after each file
                banner: "",      //added before everything
                footer: ""       //added after everything
            },
            dist: {
                // the files to concatenate
                src: [
                    //include libs
                    'app/js/lib/lib.js',
                    'app/js/script2.js',
                    'app/js/script1.js'
                ],
                // the location of the resulting JS file
                dest: 'app/tmp/<%= pkg.name %>.js'
            }
        },
        removelogging: {
            dist: {
                src: "app/tmp/<%= pkg.name %>.js",
                dest:"app/tmp/<%= pkg.name %>.js"
            }
        },
        uglify: {
            options: {
                banner: ""
            },
            build: {
                src: 'app/tmp/<%= pkg.name %>.js',
                dest: 'dist/js/<%= pkg.name %>.min.js'
            }
        },
        watch: {
            scripts: {
                files: 'app/tmp/*.js',
                tasks: ['jshint'],
                options: {
                    debounceDelay: 250,
                }
            },
            less: {
                files: 'app/less/*.less',
                tasks: ['less'],
                options: {
                  debounceDelay: 250,
                },
            },
            dist: {
                files: ['dist/*'],
                options: {
                    livereload: true,
                }
            }
        }
    });
 
    //load the packages
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-remove-logging');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
 
    //register the task
    grunt.registerTask('js', ['jshint:all']);
    grunt.registerTask('default', [
        'less',
        'concat',
        'jshint:afterconcat',
        'removelogging',
        'jshint:afterconcat',
        'uglify'
    ]);
};