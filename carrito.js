document.addEventListener("DOMContentLoaded", () => {
  mostrarCarrito();

  document.getElementById("vaciar-carrito").addEventListener("click", () => {
    localStorage.removeItem("carrito");
    mostrarCarrito();
  });

  document.getElementById("seguir-comprando").addEventListener("click", () => {
    window.location.href = "index.html"; // vuelve a la tienda
  });

  document.getElementById("comprar").addEventListener("click", () => {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    if (carrito.length === 0) {
      alert("Tu carrito está vacío.");
      return;
    }
    // Va a la página de envío
    window.location.href = "envio.html";
  });
});

function mostrarCarrito() {
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  const contenedor = document.getElementById("carrito-container");
  const totalElemento = document.getElementById("total");

  contenedor.innerHTML = "";
  let total = 0;

  if (carrito.length === 0) {
    contenedor.innerHTML = "<p>Tu carrito está vacío.</p>";
    totalElemento.textContent = "";
    return;
  }

  carrito.forEach(producto => {
    const div = document.createElement("div");
    div.classList.add("producto-carrito");
    div.innerHTML = `
      <h2>${producto.nombre}</h2>
      <p>${producto.descripcion}</p>
      <p>Precio: $${producto.precio.toFixed(2)}</p>
    `;
    contenedor.appendChild(div);
    total += producto.precio;
  });

  totalElemento.textContent = "Total: $" + total.toFixed(2);
}
