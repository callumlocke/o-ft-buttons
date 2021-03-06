'use strict';

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        'origami-demo': {
            options: {
                modernizr: false,
                main: ['demo.mustache'],
                sassExtras: 'demo.scss'
            }
        },
        watch: {
            'origami-demo': {
                files: ['main.scss', 'scss/*.scss', 'demo.scss', 'demo.mustache'],
                tasks: ['origami-demo']
            }
        }
    });

    grunt.loadNpmTasks('grunt-origami-demoer');
    grunt.loadNpmTasks('grunt-contrib-watch');


    // By default, lint and run all tests.
    grunt.registerTask('default', ['origami-demo']);

};