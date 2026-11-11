const botonBuscar = document.getElementById("buscar")
const usuarioIdInput = document.getElementById("usuario-id")
const formulario = document.getElementById("formulario")
const estado = document.getElementById("estado")
const tarjeta = document.getElementById("tarjeta")
const nombre = document.getElementById("nombre")
const titulo = document.getElementById("titulo")
const producto = document.getElementById("producto")
const precio = document.getElementById("precio")

function cargarUsuario(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Number(id) === 7) {
        resolve({ id: 7, nombre: "Ana" });
      } else {
        reject("No se encontro ese usuario.");
      }
    }, 600);
  });
}

function cargarPedidos(usuarioId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (usuarioId === 7) {
        resolve([{ id: 42, titulo: "Libro" }]);
      } else {
        reject("No se encontraron pedidos.");
      }
    }, 600);
  });
}

function cargarDetalle(pedidoId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (pedidoId === 42) {
        resolve({ producto: "Libro de JavaScript", precio: 24.99 });
      } else {
        reject("No se encontro el detalle del pedido.");
      }
    }, 600);
  });
}


formulario.addEventListener('submit', (event)=>{
  event.preventDefault();
  tarjeta.hidden = true
  botonBuscar.disabled = true
  const detallePedidos = {}
  estado.textContent = "Cargando..."
  const usuarioId = usuarioIdInput.value 
  
  cargarUsuario(usuarioId).then((usuario)=>{
    detallePedidos.nombre = usuario.nombre
    return cargarPedidos(usuario.id)
  }).then((pedidos)=>{
    const pedido = pedidos[0]
    detallePedidos.titulo = pedido.titulo
    return cargarDetalle(pedido.id)
  }).then((detalle)=>{
    detallePedidos.producto = detalle.producto
    detallePedidos.precio = detalle.precio
    tarjeta.hidden = false 
    nombre.textContent = detallePedidos.nombre
    titulo.textContent = detallePedidos.titulo
    producto.textContent = detallePedidos.producto
    precio.textContent = detallePedidos.precio
    estado.textContent = "Pedido encontrado"
  })
  .catch((error)=>{
    estado.textContent = "Error : " + error
  })
  .finally(()=>{
    botonBuscar.disabled = false

  })
})
