![Adalab](https://beta.adalab.es/resources/images/adalab-logo-155x61-bg-white.png)

# Evaluación final – Módulo 2 – JavaScript.

Ejercicio de JavaScript, HTML y CSS para realizar una página de búsqueda de series de TV a través de un API, para almacenarlas en favoritos por la usuaria. Tras hacer la búsqueda, las series encontradas se muestran en tarjetas que podrán clickarse para salvarlas como favoritas o desmarcarlas para quitarlas de favoritas.

## PASOS:

1. **ESTRUCTURA BÁSICA:** HTML.
2. **BÚSQUEDA:** a través del API de series de televisión de Tv Maze, se obtiene la información (mombre, imagen, valoración, web oficial) para crear las tarjetas. Si el API no tuviera imagen, por ejemplo, se sustituirá el valor nulo de ese atributo por un placeholder.
3. **SELECCIÓN DE FAVORITOS:** Si la usuaria hace click en cualquiera de las tarjetas de la búsqueda, si la serie no está ya en favoritos se agregará y si lo está se eliminará. Las series favoritas seleccionadas se mostrarán en la parte izquierda de la página.
4. **ALMACENAMIENTO LOCAL:** Si la usuaria vuelve a visitar la página, las series seleccionadas como favoritas se guardan en su almacenamiento local.

### BONUS:

5. **BORRAR FAVORITOS:** Al pulsar sobre las series favoritas, estas se podrán eliminar del apartado de favoritas de una en una o todas las que se encuentren en el apartado con un solo click.
6. **MAQUETACIÓN CSS:** Crear un estilo de página atractivo y que no recuerde a los visualmente espantosos años 90.

La web puede visitarse en este [enlace](https://beta.adalab.es/modulo-2-evaluacion-final-2y2son4/ 'Shows hunter by 2y2son4').

## DIAGRAMAS DE FLUJO:

![01-diagrama_arrancar_pagina](./src/images/01-diagrama_arrancar_pagina.png '01-diagrama_arrancar_pagina')

![02-diagrama_ventana_modal](./src/images/02-diagrama_ventana_modal.png '02-diagrama_ventana_modal')

![03-diagrama_busqueda](./src/images/03-diagrama_busqueda.png '03-diagrama_busqueda')

![04-diagrama_favoritos_busqueda](./src/images/04-diagrama_favoritos_busqueda.png '04-diagrama_favoritos_busqueda')

![05-diagrama_favoritos_favoritos](./src/images/05-diagrama_favoritos_favoritos.png '05-diagrama_favoritos_favoritos')
