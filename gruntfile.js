
module.exports = function(grunt) {

  'use strict';


  // Load Grunt tasks automatically ---------------------------------

  require('load-grunt-tasks')(grunt, { scope: 'devDependencies' });


  grunt.initConfig({

    // Tasks Configurations -----------------------------------------

    //Lint ------------------------------------------

    jshint: {
      options: {
        reporter: require('jshint-stylish')
      },

      all: {
        src: [ 'gruntfile.js', 'assets/js/**/*.js' ] 
      }

    }, 

    // Minify js ------------------------------------

    uglify: {
      all: {
        files: {
          'build/js/script.min.js' : ['assets/js/**/*.js']
        } 
      }
    }, 

    // Styling --------------------------------------

    compass: {

      dev: {
        options:{
          config: 'config.rb',
          force: true
        }

      }
    }, 

    // Watch ----------------------------------------

    watch: {
      scripts: {
        files: [ 'Gruntfile.js', 'assets/js/**/*.js' ] ,
        tasks: ['newer:jshint:all','newer:uglify:all']
      }, 

      sass: {
        files: 'assets/sass/*.scss',
        tasks: ['compass:dev']
      }, 

      livereload: {
        options: { livereload: true },
        files: [ '*.html' , 'build/css/*.css', 'build/js/script.min.js', 'build/img/**']
      } 

    } 
    
  }); 


  // Define tasks...
  grunt.registerTask('default', 'watch'); // default grunt command


}; 

