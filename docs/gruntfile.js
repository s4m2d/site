module.exports = function(grunt) {
  var version = grunt.option('versionnr') || "";
  grunt.initConfig({
    concat: {
      dist: {
        src: ['_dev/app/app.js'],
        dest: 'data/app.min.js',
      },
    },
    babel: {
  		options: {
  			sourceMap: true,
  			presets: ['babel-preset-es2015']
  		},
  		dist: {
  			files: [{
  				src: 'data/*.js',
          dest: 'data/app.min.js'
  			}]
  		}
  	},
    uglify: {
      options: {
        mangle: true,
        sourceMap: true,
      },
      my_target: {
        files: [{
          src: 'data/app.min.js',
          dest: 'data/app.min.js'
        }]
      }
    },
    sass: {
        options: {
            sourceMap: true
        },
        dist: {
            files: [{
              src: '_dev/template/application.scss',
              dest: 'data/app.min.css'
            }]
        }
    },
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1,
        sourceMap: true
      },
      target: {
        files: [{
          src: 'data/app.min.css',
          dest: 'data/app.min.css'
        }]
      }
    },
    watch: {
      js: {
        files: ['_dev/app/*.js'],
        tasks: ['concat', 'babel', 'uglify'],
        options: {
          spawn: false,
        },
      },
      sass: {
        files: ['_dev/template/**/*.scss'],
        tasks: ['sass', 'cssmin'],
        options: {
          spawn: false,
        },
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', [ 'concat', 'babel', 'uglify', 'sass', 'cssmin', 'watch']);
};
