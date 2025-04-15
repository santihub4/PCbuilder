// Función para dar formato con puntos (separador de miles)
function formatearPrecio(valor) {
    return parseFloat(valor).toLocaleString('es-AR');
}

// Calcular el total
document.getElementById("calcular-total").addEventListener("click", function() {
    const componentes = document.querySelectorAll(".componente");
    let total = 0;

    componentes.forEach(componente => {
        const precioInput = componente.querySelector(".precio-componente");
        const precio = parseFloat(precioInput.value.replace(/,/g, '')); // Reemplazamos comas si se ingresaron
        if (!isNaN(precio)) {
            total += precio;
        }
    });

    document.getElementById("total").textContent = formatearPrecio(total.toFixed(2));
});
