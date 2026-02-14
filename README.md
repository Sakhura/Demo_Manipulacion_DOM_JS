# Demo: Acceso al DOM con JavaScript

## Descripción

Demo interactiva que enseña cómo acceder a los elementos de una página web utilizando JavaScript. Se exploran 5 métodos fundamentales del DOM, cada uno con ejemplos ejecutables en tiempo real y una consola simulada que muestra los resultados.

## Métodos cubiertos

1. **`getElementById()`** — Selecciona un solo elemento por su atributo `id`. Devuelve el elemento directamente.
2. **`getElementsByClassName()`** — Devuelve una HTMLCollection con todos los elementos que comparten una clase.
3. **`getElementsByTagName()`** — Selecciona todos los elementos de un tipo de etiqueta específico (ej: `li`, `p`, `div`).
4. **`querySelector()`** — Selecciona el primer elemento que coincida con un selector CSS (`.clase`, `#id`, `etiqueta`).
5. **`querySelectorAll()`** — Devuelve una NodeList con todos los elementos que coincidan con el selector CSS. Se puede recorrer con `forEach`.

## Estructura del proyecto

```
/
├── index.html    # Estructura HTML con la zona de prueba y secciones de demo
├── style.css     # Estilos de la página
├── script.js     # Lógica JavaScript con las funciones de cada método
└── README.md     # Documentación del proyecto
```

## Cómo usar

1. Abrir `index.html` en el navegador.
2. En la parte superior se encuentra la **zona HTML de prueba** que contiene los elementos sobre los que se ejecutan los métodos.
3. Cada sección tiene un botón **"Ejecutar"** que corre el código JavaScript correspondiente.
4. El resultado se muestra en la consola simulada debajo de cada bloque de código.
5. El elemento accedido se resalta visualmente en la zona de prueba.

## Tecnologías utilizadas

- HTML5
- CSS3 (animaciones, variables CSS)
- JavaScript vanilla (manipulación del DOM)

## Funciones principales (script.js)

- `showOutput(outputId, lines)` — Muestra las líneas de resultado en la consola simulada con animación.
- `flashElement(el)` — Aplica una animación de resaltado al elemento del DOM que fue accedido.
- `runDemo1()` a `runDemo5()` — Ejecutan cada uno de los 5 métodos de acceso al DOM y muestran el resultado.

## Autor

Desarrollado como material educativo para la asignatura de Programación Web.
