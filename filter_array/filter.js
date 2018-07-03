// arreglo de objectos
let arreglo = [
{ id : 1 , nombre:'Armando' },
{ id : 2 , nombre:'Leonardo' },
{ id : 3 , nombre:'Karyna' },
{ id : 4 , nombre:'Norkis' }
]

/*
	filter es una funcion para iterar sobre un array, el cual 
	en el ejemplo devuelve el resultado cuando encuentra una coincidencia
	por defecto devuelve un array, y si no encuentra coincidencia devuelve null 
*/
let resultado = arreglo.filter( (elemento) => elemento.id == 1 || null )

console.log(resultado[0].nombre)