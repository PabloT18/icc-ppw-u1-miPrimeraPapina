document.addEventListener("DOMContentLoaded", () => {
    // Botón para agregar nueva fila a la tabla
    const boton = document.getElementById("agregarFila");
    if (boton) {
        boton.addEventListener("click", () => {
            const tabla = document.querySelector("table");
            if (!tabla) return;
            const nuevaFila = tabla.insertRow();
            nuevaFila.innerHTML = "<td>&lt;article&gt;</td><td>Sección independiente del contenido</td>";
        });
    }

    // Efecto al pasar el mouse por el título
    const titulo = document.getElementById("titulo");
    if (titulo) {
        const originalColor = window.getComputedStyle(titulo).color;
        titulo.addEventListener("mouseover", () => {
            titulo.style.color = "orange";
        });
        titulo.addEventListener("mouseout", () => {
            titulo.style.color = originalColor || "";
        });
    }
});
