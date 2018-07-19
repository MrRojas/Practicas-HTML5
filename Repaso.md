# Repaso de HTML5 y CSS3 

## src y dist

src es la carpeta donde esta todo lo necesario para desarrollo, en cambio en dist esta todo lo necesario para produccion, es decir el usuario final.


## Medidas Fijas 

### Ejemplo de **auto**

 witdh : auto; // ancho automatico


## Uso del display

 display: inline // no ocupa espacio
 display: block // ocupa todo el espacio
 display: inline-blcok // ocupa el espacio que necesita
 display: flex // 


## Uso de Listas

### Quitar el decorado con css: 

 list-style: none; //propiedad para las listas 

### Quitar las viñetas con css: 

.menu li:before {
		display: none;
	}


## Background 

### Degradado: 
 background: linear-gradient(to left, #fe344e, #ff7250); //efecto de colores 


## Practica para insertar un logo :

 <figure class="logotipo"> <!-- logotipo -->
      <img src="images/invie.png" width="186" height="60" alt="Invie logotipo">
 </figure>

## Footer

### Con la ayuda de diplay: flex, flex-wrap:wrap y align-items podemos jugar con el espacio para dar mejor estetica en el footer 

#### En el ejemplo de un footer de telefono, email e imagen

.contacto {
    display: flex;
    width: 300px;
    flex-wrap: wrap;
    align-items: center;
} 

<div class="contacto">
  <img src="images/invie-white.png" alt="logotipo blanco">
  <a href="tel:+573024456678">
  	<strong>Telefono</strong> 
  	<span>3024456678</span></a>
  <a href="mailto:contacto@invie.com">
  	<strong>E-mail</strong> 
  	<span>contacto@invie.com</span>
  </a>
</div>


## Selector de Referencia en CSS3

input[type="text"]{
  
}

## Usar Zoom para incrementar el tamaño de ciertos elementos ejemplo:

input[type="radio"],
input[type="checkbox"]{

  zoom : 1.5;

}


## Fondo con Opacidad 

### rgba -> rgb con con canal alfa para opacida

background-color: rgba(255, 69, 78 , .8);

## Display Flex y align-items: center 

Se usa para tomar el ancho y largo del contenedor, para usarlo con los elementos hijo

### y con flex : 1 asignado a los elementos hijos 

Toma todo el espacio del contenedor

#### muy util para realizar menus 