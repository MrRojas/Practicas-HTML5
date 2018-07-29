# Scope 

### Es el conjunto de variables y funciones las cual podemos acceder una determinada linea de codigo


#### Ejemplo

```
// Scope Global
var nombre = "Norkis"

function saludar() {
   console.log(nombre);
}

function saludar2() {
   console.log(` Hola ${nombre}`)
}

saludar2()
```