
# Programación y Plataformas Web (PPW)

---

#  Práctica 1 – Explorando los Estándares Web con HTML, CSS y JavaScript

**Asignatura:** Programación y Plataformas Web  
**Unidad:** 1.2 – Estándares Web  
**Estudiante:** Pablo Torres
**Repositorio:** [https://github.com/PabloT18/icc-ppw-u1-miPrimeraPagina](https://github.com/PabloT18/icc-ppw-u1-miPrimeraPagina)  
**Página desplegada (GitHub Pages):** [https://pablot18.github.io/icc-ppw-u1-miPrimeraPapina/](https://pablot18.github.io/icc-ppw-u1-miPrimeraPapina/)  

---

## 🧱 Estructura HTML utilizada

| Componente | Descripción | Implementación |
|-------------|--------------|----------------|
| `<!DOCTYPE html>` | Declaración del documento HTML5 | Línea 1 |
| `<html lang="es">` | Idioma del documento | Español |
| `<header>` | Encabezado principal | Contiene `<h1>` y `<h2>` |
| `<section>` | Agrupa contenido principal | Dos secciones con `<h2>` |
| `<table>` | Muestra los elementos estudiados | Tres filas con `<th>` y `<td>` |
| `<footer>` | Pie de página | Nombre del estudiante y asignatura |

---

## 🧩 Nuevas etiquetas exploradas

| Etiqueta | Descripción | Implementación |
|-----------|--------------|----------------|
| `<figure>` | Contenedor para imagen con pie de foto | Logo HTML5 con `<figcaption>` |
| `<progress>` | Barra de progreso de una tarea | Representa 70% completado |

**Código usado:**
```html
<figure>
  <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt="Logo HTML5">
  <figcaption>Logo de HTML5</figcaption>
</figure>

<progress value="70" max="100">70%</progress>

