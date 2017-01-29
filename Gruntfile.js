module.exports = function(grunt) {

  //Checks the dependencies associated with Grunt and autoloads
  //& requires ALL of them in this Gruntfile
  require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

  // Project configuration.
  grunt.initConfig({





    // Sass configuration
    sass: {
      options: {
        sourceMap: false,
        outputStyle: 'compressed'
      },
      dist: {
        files: {
          'dist/main.css': 'css/scss/main.scss'
        }
      }
    },





    // Copy font awesome fonts into relative project
    copy: {
      font_awesome: {
        files: [
          {
            expand: true,
            flatten: true,
            src: ['node_modules/font-awesome/fonts/*'],
            dest: 'fonts'
          }
        ]
      },
      main: {
        files: [
          {expand: true, src: ['index.html'], dest: 'dist/'},
          {expand: true, src: ['img/*'], dest: 'dist/'},
          {expand: true, src: ['node_modules/font-awesome/fonts/*'], dest: 'dist/fonts', flatten: true}
        ]
      }
    },


    // clean directories

    clean: ['dist'],





    // Use PostCSS Autoprefixer to apply browser prefixes for certain styles
    postcss: {
      options: {
        map: false,
        processors: [
          require('autoprefixer-core')({
              browsers: ['last 2 versions']
          })
        ]
      },
      dist: {
        src: 'css/*.css'
      }
    },





    // Server
    connect: {
      server: {
        options: {
          port: 9001,
          base: ''
        }
      }
    },





    // Open
    open : {
      dev : {
        path: 'http://localhost:9001'
      }
    },





    // Watches files and folders for us
    watch: {
      files: [
        '*.html',
        'js/**/*.js',
        'css/**/*.scss',
        'img/**/*.{png,jpg,gif,svg}'
      ],
      tasks: [
        'copy:font_awesome',
        'sass',
        'postcss'
      ]
    }

  });

  //grunt serve
  grunt.registerTask('default', ['connect', 'open', 'watch']);
  grunt.registerTask('build', ['clean', 'sass', 'copy:main']);
};
