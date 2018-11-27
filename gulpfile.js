// npm i
// npm audit fix --force

var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var clean = require('gulp-clean');
var rename = require('gulp-rename');
var handlebars = require('gulp-compile-handlebars');
var useref = require('gulp-useref');
var replace = require('gulp-replace');
var insert = require('gulp-insert');
var replaceName = require('gulp-replace-name');

var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;
const using = require('gulp-using');
const get = require('simple-get');

var options = {
    batch : ['./src/components/', './content/html/', './content/data/json-components/']
    }


var dst =       '_dist/';
var prebuild =  'react/';
var fScss=      'src/scss/**/*.scss';
var fHtml=      'src/**/*.html';
var fImages=    'src/images/**/*';
var fJs=        'src/js/**/*';
var fJson=      ['src/**/*.json', 'content/**/*.json'];
var fMd=         'content/**/*.md';

var siteJson = require('./content/data/site.json');


gulp.task('browserSync', function() {
  browserSync.init({
    //proxy: "http://localhost:8888/wp-huc"
    server: {
      baseDir: dst
    },
    browser: ["google chrome"], //, "firefox"
  })
})

function reload(done) {
  browserSync.reload();
  done();
}

gulp.task('clean', function () {
    return gulp.src(dst, {read: false, allowEmpty: true})//{ allowEmpty: true }
        .pipe(plumber())
        .pipe(clean())
});

gulp.task('json', function(done) {
  var prejson = [];

  gulp.src('./content/data/templ-site.html')
      .pipe(plumber())
      .pipe(handlebars(prejson, options))
      .pipe(rename('site.json'))
      .pipe(gulp.dest('content/data/'));
  done();
});



gulp.task('nav', function(done) {

  gulp.src('./src/templates/nav.html')
      .pipe(plumber())
      .pipe(handlebars(siteJson, options))
      .pipe(gulp.dest('src/components/'));
  done();
});



gulp.task('sass', function(){
  return gulp.src('./src/scss/*')
    .pipe(plumber())
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest(dst+'css'))
});



gulp.task('buildFromTemplates', function(done) {

  for(var i=0; i<siteJson.pages.length; i++) {
      var page = siteJson.pages[i],
          fileName = page.name.replace(/ +/g, '-').toLowerCase();
          template = page.template;

      gulp.src('./src/templates/'+template+'.html')
          .pipe(plumber())
          .pipe(handlebars(page, options))
          .pipe(rename(fileName + ".html"))
          .pipe(useref())
          .pipe(gulp.dest(dst))
          .pipe(browserSync.stream());
  }
  done();
});


gulp.task('copyFiles', function(done) {
  return gulp.src(fImages)
    .pipe(gulp.dest(dst+'images'))

    return gulp.src(fJs)
      .pipe(gulp.dest(dst+'js'))
  done();
});



gulp.task('reactScss', function(done) {
  return gulp.src('./src/scss/components/*')
    .pipe(plumber())
    .pipe(insert.prepend('@import \'var\'; \n'+'@import \'typo\'; \n'+'@import \'basic-markup\'; \n'+'@import \'layout-basic\'; \n'))
    .pipe(replaceName(/_/g, ''))
    .pipe(gulp.dest(prebuild+'pre/scss'))
    done();
});

gulp.task('reactScssVar', function(done) {
  return gulp.src(['./src/scss/_var.scss', './src/scss/_typo.scss', './src/scss/_basic-markup.scss',  './src/scss/layout/_layout-basic.scss'])
    .pipe(plumber())
    .pipe(gulp.dest(prebuild+'pre/scss'))

    done();
});



gulp.task('reactConvert', function(done) {
  return gulp.src('./src/components/*')
    .pipe(plumber())
    .pipe(replace('class=', 'className='))
    .pipe(replace('{{', '{'))
    .pipe(replace('}}', '}'))
    .pipe(gulp.dest(prebuild+'components'))

    done();
});

gulp.task('reactCss', function(done) {
    return gulp.src('./react/pre/scss/*.scss')
      .pipe(plumber())
      .pipe(sass())
      .pipe(gulp.dest('./react/css'))
    done();
});



gulp.task('build',
  gulp.series('clean', 'reactScss', 'reactScssVar', 'sass', 'buildFromTemplates', 'copyFiles', 'reactConvert', 'reactCss',
  function(done) {
      done();
  }
));


gulp.task('watch', function () {
  gulp.watch([[fHtml, fScss, fJs, fJson, fMd]
  ], gulp.series('build'));
});



gulp.task('default',
  gulp.series('build', gulp.parallel('browserSync','watch'),
  function(done) {
      done();
  }

));
