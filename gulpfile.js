/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
const gulp = require('gulp')
const babel = require('gulp-babel')
// const mocha = require('gulp-mocha')
const runSequence = require('run-sequence')
const del = require('del')

const config = {
	src: './src/**/*.js',
	build: './build',
	test: './build/test/**/*.spec.js',
	babel: {
		presets: ['es2016'],
	},
}


gulp.task('develop', () => {
	runSequence(
		'watch'
		// TODO add lint
	)
})

gulp.task('default', () => {
	runSequence(
		'clean',
		'babel'
	)
})


// helpers
gulp.task('clean', () => {
	return del(config.build)
})

gulp.task('watch', () => {
	gulp.watch(config.src, ['babel'])
})

gulp.task('babel', () => {
	return gulp.src(config.src)
		.pipe(babel(config.babel))
		.pipe(gulp.dest(config.build))
})
