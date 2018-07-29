# Repaso Basico de jQuery

## Eventos

### Del navegador...

*	.resize()
*	.scroll()

### Cargar Documento 

*	.ready()

### Event Handler Attachment 

*	.off()
*	.on()
*	jQuery.proxy()
*	.unbind()
*	.trigger()
*	.undelegate()
*	.one()
*	.triggerHandler()

### Event Object 

*	event.currentTarget
*	event.stopPropagation()
*	event.type

### Form Events

*	.blur()
*	.select()
*	.change()
*	.focus()

### Keyboard Events 

*	.focuisin()
*	.keypress()
*	.focusout()
*	.keydown()
*	.keyup()

### Mouse Events 

*	click()
*	focusout()
*	mouseenter()
*	mouseout()
*	dbclick()
*	hover()
*	mouseleave()
*	mouseover()
*	focusin()
*	mousedown()
*	mousemove()
*	mouseup()


## Movernos entre Nodos 

```
// seleccionar todos los botones
// donde el que tenga la clase listo
// se agrega la clase rojito

$('button').closest('.listo').addClass('rojito')


```

