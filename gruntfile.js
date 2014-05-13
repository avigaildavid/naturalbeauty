
module.exports = function(grunt) {

  'use strict';

  //Path vars -------------------------------------------------------

  var jsSrcFiles, scssSrcFiles, allHtml, buildCss, buildJs, buildImg;
  
  jsSrcFiles = 'assets/js/**/*.js';
  scssSrcFiles = 'assets/sass/*.scss';

  allHtml = '*.html';
  buildCss = 'build/css/*.css';
  buildJs = 'build/js/{script.min.js}';
  buildImg = 'build/img/**';


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
        src: [ 'gruntfile.js', jsSrcFiles ] 
      }

    }, 

    // Minify js ------------------------------------

    uglify: {
      all: {
        files: {
          buildJs:  jsSrcFiles 
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
        files: [ 'Gruntfile.js', jsSrcFiles ] ,
        tasks: ['newer:jshint:all','newer:uglify:all']
      }, 

      sass: {
        files: scssSrcFiles,
        tasks: ['compass:dev']
      }, 

      livereload: {
        options: { livereload: true },
        files: [ allHtml , buildCss, buildJs, buildImg]
      } 

    } 
    
  }); 


  // Define tasks...
  grunt.registerTask('default', 'watch'); // default grunt command


}; 

