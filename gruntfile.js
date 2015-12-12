module.exports = function(grunt) {

  grunt.initConfig({
      cssmin: {
          target: {
              files: [{
                  expand: true,
                   src: ['css/*.css', '!*.min.css'],
                  dest: 'css/production.css',
                  ext: '.min.css',
              },

              {
                expand:true,
                src: ['views/css/*.css', '!*.min.css'],
                  dest: 'views/css/production.css',
                  ext: '.min.css'

            }]
          }
      },
      imagemin: {
          dynamic: {
              files: [{
                  expand: true,
                   src: ['img/*.{png,jpg,gif}'],
                  dest: 'img/dest'
                }

                ]
          }
      },

      uglify: {
          options: {
              mangle: false
              },
          my_target: {
              files: {
                'js/about.min.js': ['js/about.js'],
                'js/perfmatters.min.js': ['js/perfmatters.js'],
                'js/jQuery.min.js': ['js/jQuery.js'],
                'views/js/main.min.js' : ['views/js/main.js']
              }
          }
      },

      htmlmin: {
          dist: {
              options: {
                  removeComments: true,
                  collapseWhitespace: true
              },
              files: {
                  'minified/index.html': 'Src/index.html',
                  'minified/project-webperf.html': 'Src/project-webperf.html',
                 'minified/project-mobile.html' : 'Src/project-mobile.html',
                 'minified/project-2048.html': 'Src/project-2048.html',
                  'minified/pizza.html': 'Src/pizza.html'
              }
          }
      },

      critical: {
          test: {
              options: {
                  base: './',
                      css: [
                        'css/style.css'
                      ],
                      width: 320,                       // viewport width and height
                      height: 70
              },
              files:{
                  'index.html': 'minified/index.html'
              }
          }
      }
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-critical');


  grunt.registerTask('default', ['cssmin', 'imagemin', 'uglify', 'htmlmin', 'critical']);
};