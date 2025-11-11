document.getElementById("confirmar-compra").addEventListener("click", () => {
  const envioSeleccionado = document.querySelector('input[name="envio"]:checked').value;
  const pagoSeleccionado = document.querySelector('input[name="pago"]:checked').value;

  // Guardar datos del carrito y envío en localStorage para usar en la nueva pestaña
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  localStorage.setItem("resumenCompra", JSON.stringify({ carrito, envio: envioSeleccionado }));

  if (pagoSeleccionado === "debito" || pagoSeleccionado === "credito") {
    window.open("pago-tarjeta.html", "_blank");
  } else if (pagoSeleccionado === "transferencia") {
    window.open("pago-transferencia.html", "_blank");
  }
});
