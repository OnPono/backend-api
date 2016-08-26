/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
const gulp = require('gulp')
const runSequence = require('run-sequence')

const config = {
	src: './src/**/*.js',
	test: './src/test/**/*.js',
}

gulp.task('test-watch', () => {
	runSequence(
		'test',
		() => { gulp.watch([config.src, config.test], ['test']) }
	)
})

gulp.task('test', () => {
	gulp.src(config.test, { read: false })
		.pipe(mocha({ reporter: 'spec' }))
		.on('error', err => console.error(err.toString()))
})
