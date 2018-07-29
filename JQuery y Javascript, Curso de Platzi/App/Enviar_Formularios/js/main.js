// seleccionar un elemento 
var formulario = $("form")
var boton = $(".btn")

var pulse = (event) => {

	// detenie el envio
	event.preventDefault()

	// mostrar por consola los eventos 
	console.log(event)

	// obtener la accion 

	let accion = formulario.attr('action');
	let metodo = formulario.attr('method');


	/*efecto para el boton */
	boton.toggleClass('pulse') 
	setTimeout( () =>  boton.toggleClass('pulse') , 300 )	
	//-------------------

	setTimeout(  () => 

			$.ajax({
		url: accion,
		type: metodo,
		data: formulario.serialize()
		})
		.done(function(rsp) {
			alert(rsp)
		})
		.fail(function(rsp) {
			console.log("error");
		})

	, 800)


	
	
}


// activar la accion

formulario.on('submit', pulse )

