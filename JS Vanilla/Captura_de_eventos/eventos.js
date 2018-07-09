// escuchar a window pero puede escuchar a otros elementos 
// por ejemplo $miVar.addEventListener 

/*
	Existen diversos tipos de eventos como son:

	*	load = cargar 
	*	touchstart = para tables 
	*	click = al hacer click, entre otros 
*/

window.addEventListener('load' , () => {

	document.getElementById('mensaje').innerHTML = 'Esto es un mensaje desde el js '
})