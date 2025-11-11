let carrito = [];

function agregarCarrito(nombre, precio, talle){
  carrito.push({ nombre, precio, talle });
  actualizarCarrito();
}

function actualizarCarrito(){
  const cantidadElem = document.querySelector('#carrito .cantidad');
  cantidadElem.textContent = `${carrito.length} producto${carrito.length!==1?'s':''}`;
  localStorage.setItem('carrito', JSON.stringify(carrito));
}

window.addEventListener('load', ()=>{
  const saved = localStorage.getItem('carrito');
  if(saved){
    carrito = JSON.parse(saved);
    actualizarCarrito();
  }
});
