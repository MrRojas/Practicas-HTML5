# Gulp se utiliza para optimizar tareas

Es usado ademas en Postcss para lograr la magia de la transpilacion 

## Para instalarlo se usa 

npm install --save-dev gulp gulp-postcss browser-sync 

### browser-sync ? 

Es usado para permitir que el navegador se actualize por cada cambio realizado en desarrollo 

## Para Definir tarear en GULP se usa el metodo task, al cual se pasa 2 valores, un string con el nombre de la tarea, y un una funcion que generalmente es anonima, ejemplo: 

gulp.task('css' , () =>{
	
})

## Un Servidor con Gulp 

Es mas facil mostrar un ejemplo, para eso ve el archivo que esta dentro de esta misma carpeta, se llama servidor.js 