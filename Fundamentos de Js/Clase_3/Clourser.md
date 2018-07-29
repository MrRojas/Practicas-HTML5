# Clourser 

Los closure son que recuerdan el  en el cual fuerón creadas, esto quiere decir que al llamar la función van a recordar las variables que tenian en ese momento.

```
let saludarFamilia = function(apellido){

   return function(nombre){

       return "Armando"
   }
}

let familiaRojas = saludarFamilia("Rojas")


/* Manera practica de realizar*/


let saludar = apellido => nombre =>    "Armando"
   


const familia2= saludarFamilia("Rojas")

familia2("Armando")
```