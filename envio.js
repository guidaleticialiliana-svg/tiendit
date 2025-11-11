document.getElementById("form-envio").addEventListener("submit", (e) => {
  e.preventDefault();

  // Datos del formulario
  const nombre = document.getElementById("nombre").value;
  const dni = document.getElementById("dni").value;
  const calle = document.getElementById("calle").value;
  const altura = document.getElementById("altura").value;
  const codigo = document.getElementById("codigo").value;
  const localidad = document.getElementById("localidad").value;
  const provincia = document.getElementById("provincia").value;
  const email = document.getElementById("email").value;
  const telefono = document.getElementById("telefono").value;

  const envioSeleccionado = document.querySelector('input[name="envio"]:checked').value;

  let costoEnvio = 0;
  if (envioSeleccionado === "comun") costoEnvio = 10;
  else if (envioSeleccionado === "rapido") costoEnvio = 4500;

  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  if (carrito.length === 0) {
    alert("Tu carrito está vacío.");
    window.location.href = "index.html";
    return;
  }

  // Construir mensaje de compra
  let mensaje = `¡Gracias por tu compra, ${nombre}!\n\n`;
  mensaje += `Datos de envío:\nDNI: ${dni}\nCalle: ${calle} ${altura}\nCódigo Postal: ${codigo}\nLocalidad: ${localidad}\nProvincia: ${provincia}\nEmail: ${email}\nTeléfono: ${telefono}\n`;
  mensaje += `Tipo de envío: ${envioSeleccionado} - Costo: $${costoEnvio}\n\n`;
  mensaje += `Productos comprados:\n`;

  let total = 0;
  carrito.forEach(p => {
    mensaje += `- ${p.nombre}: $${p.precio.toFixed(2)}\n`;
    total += p.precio;
  });

  total += costoEnvio;
  mensaje += `Total a pagar (incluido envío): $${total.toFixed(2)}`;

  alert(mensaje);

  // Vaciar carrito después de la compra
  localStorage.removeItem("carrito");
  window.location.href = "index.html";
});
