module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            compile: {
                options: {
                  paths: ["app/less"],
                  cleancss: true,
                  strictImports : true,
                  report : 'gzip'
                },
                files: {
                  "dist/css/result.css": "app/less/sources.less"
                }
            }
        }
    });

    // Load the plugin that provides the "less" task.
    grunt.loadNpmTasks('grunt-contrib-less');

    // Default task
    grunt.registerTask('default', ['less']);

};
