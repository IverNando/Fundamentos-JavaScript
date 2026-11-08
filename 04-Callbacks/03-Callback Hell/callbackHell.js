const cargar = document.getElementById("cargar")
const resultado = document.getElementById("resultado")

let resultadoScript = {}


function cargarUsuario(callback) {
    setTimeout(() => {
        callback({ id: 7, nombre: "Ana" });
    }, 500);
}

function cargarPedidos(usuarioId, callback) {
    setTimeout(() => {
        callback([{ id: 42, titulo: "Libro" }]);
    }, 500);
}

function cargarDetalle(pedidoId, callback) {
    setTimeout(() => {
        callback({ producto: "Libro de JavaScript", precio: 24.99 });
    }, 500);
}

cargar.addEventListener("click", ()=>{
cargarUsuario((usuario) => {
        resultadoScript.nombre = usuario.nombre 

    cargarPedidos(usuario.id, (pedidos) => {
        const pedido = pedidos[0]
        resultadoScript.titulo = pedido.titulo

        cargarDetalle(pedido.id, (detalle)=>{
        resultadoScript.producto = detalle.producto
        resultado.textContent = 
        "Nombre: " + resultadoScript.nombre + 
        " Titulo: " + resultadoScript.titulo + 
        " Producto: " + resultadoScript.producto;
        })
    })

})})

