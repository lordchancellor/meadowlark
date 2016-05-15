module.exports = function(grunt) {
	//load plugins
	[
		'grunt-cafe-mocha',
		'grunt-eslint',
		'grunt-sass',
		'grunt-exec'
	].forEach(function(task) {
		grunt.loadNpmTasks(task);
	});
	
	//configure plugins
	grunt.initConfig({
		cafemocha: {
			all: {src: 'qa/tests-*.js', options: { ui: 'tdd' }, }
		},
		eslint: {
			app: ['meadowlark.js', 'public/js/**/*.js', 'lib/**/*.js'],
			qa: ['Gruntfile.js', 'public/qa/**/*.js', 'qa/**/*.js']
		},
		sass: {
			options: {
				sourceMap: true
			},
			dist: {
				files: {
					'sass/style.scss': 'public/css/style.css'
				}
			}
		},
		exec: {
			
		}
	});
	
	//register tasks
	grunt.registerTask('default', ['cafemocha', 'eslint', 'sass', 'exec']);
};