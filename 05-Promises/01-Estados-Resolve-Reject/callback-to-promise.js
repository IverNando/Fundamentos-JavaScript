

function cargarUsuarioCallback(callback) {
    setTimeout(() => {
        callback({ id: 7, nombre: "Ana" });
    }, 500);
}

function cargarPedidos(usuarioId) {
    return new Promise((resolve, reject) => {

        setTimeout(()=>{
            if (usuarioId === 7) {
            resolve([{id: 42, titulo: "Libro" }])
            }
            else {
                reject("Usuario no encontrado ")
            }
        
        }, 500)
    })
}


function cargarUsuario() {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            
            resolve({ id: 7, nombre: "Ana" })
        
        }, 500)

    })
}

function cargarDetalle(pedidoId) {
    return new Promise ((resolve)=>{
        setTimeout(()=>{

            resolve({ producto: "Libro de JavaScript", precio: 24.99 })

        }, 500)
    })
}

cargarUsuario().then((usuario)=> {
    return cargarPedidos(usuario.id);
})
.then((pedidos)=>{
    const pedido = pedidos[0]
    return cargarDetalle(pedido.id);

})
.then((detalle)=>{
    console.log("Producto : " + detalle.producto + " Precio : " + detalle.precio)

})
.catch((error)=>{
    console.log("Error: ", error)
})
.finally(()=>{
    console.log("Proceso terminado")
})