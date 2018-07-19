// Invocar Gulp
var gulp = require('gulp')
var browserSync = require('browser-sync')
// servidor de Desarrollo con Gulp
// task son las tareas a ejecutar en la cual se pasa un nombre y una funcion 
gulp.task( 'serve' , () => {

	// llamar a browserSync
	// se pasa un objeto de configuracion 
	browserSync.init({
		// configurar donde arranca el server 
		server: {
			baseDir : './dist'
		}
	})

})
