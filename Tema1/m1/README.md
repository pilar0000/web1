# ♡ CAZA EL TOPO ♡
Misión 1 · El Despertar del DOM

Proyecto hecho con HTML, CSS Y JavaScript

## Cómo probarlo

1. Abrir el archivo `index.html` en el navegador.
2. Pulsar el botón **EMPEZAR JUEGO**.
3. Durante 30 segundos aparecerá un topo de forma aleatoria en la cuadrícula.
4. Cada vez que se hace clic sobre el topo se suma un punto.
5. Cuando el tiempo llega a cero, la partida termina y se muestran los puntos totales.
6. El botón **JUGAR OTRA VEZ** permite empezar otra partida.
7. Pulsando la tecla 'n' se activa y desactiva el modo oscuro.

## Características

- Cuadrícula de 3x3.
- Aparición aleatoria del topo.
- Marcador de puntos.
- Temporizador de 30 segundos.
- Botón para empezar el juego.
- Botón para volver a jugar.
- Animaciones CSS.
- Modo oscuro mediante una tecla.

## Uso de IA

Durante el desarrollo he utilizado ChatGPT para resolver dudas y errores en algunas partes del proyecto. 
La IA me ha ayudado principalmente a corregir errores de sintaxis, entender el funcionamiento del modo oscuro, 
`classList`, y algunos estilos CSS.
He ido probando los cambios en el navegador después de modificar los archivos y he ido corrigiendo los problemas que aparecían
o algunos detalles, como el botón para volver a jugar y el botón de inicio.

Prompts:
- ¿Cómo puedo cambiar la forma del cursor?
- ¿Cómo tengo que animar el titulo para que se haga más grande y más pequeño?
- ¿Cómo se usa keydown en js?
- No consigo que los botones de empezar y jugar otra vez sean funcionales

## Autopsia
### 1. Uso de `setInterval` para mover el topo

He decidido utilizar `setInterval` para la función que muestra el topo en una posición aleatoria cada dos segundos.
La ventaja es que es fácil de entender y permite repetir automáticamente la acción. La alternativa era utilizar varios setTimeout
encadenados, que serían más útiles si quisiera controlar cuándo aparece cada topo.

### 2. Reiniciar la partida con `location.reload()`

Para el botón **JUGAR OTRA VEZ** he decidido usar esta función porque recarga la página y reinicia el juego a su estado inicial.
Me ha parecido buena idea porque es un juego sencillo y permite reiniciar la partida rápidamente. Otra opción habría sido crear una función
que reiniciara manualmente las variables, botones, temporizadores y clases, pero recargar la página es más sencillo ya que el proyecto es
pequeño.

## Archivos del proyecto

El proyecto está dividido en tres archivos principales y un README:
- `index.html`: contiene la estructura de la página.
- `style.css`: contiene el diseño, las animaciones y el modo oscuro.
- `script.js`: contiene la parte lógica, la puntuación y el temporizador.
- `README.md`: contiene la explicación y documentación del proyecto.
