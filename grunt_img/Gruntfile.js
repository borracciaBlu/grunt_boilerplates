module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        img: {
            task1: {
                src: 'app/img',
                dest: 'dist/img'
            }
        }
    });

    grunt.loadNpmTasks('grunt-img');

    // Default task
    grunt.registerTask('default', ['img']);
};