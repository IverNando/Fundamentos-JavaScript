const estado = document.getElementById("estado")
const botonVer = document.getElementById("cargar-oferta")
const nombreOferta = document.getElementById("nombre-oferta")
const precioOferta = document.getElementById("precio-oferta")
const tarjetaOferta = document.getElementById("tarjeta-oferta")
const botonActivar = document.getElementById("disponible")
const tarjetaOfertaActivada = document.getElementById("tarjeta-oferta-activada")
const mensajeOferta = document.getElementById("mensaje-oferta-activo")

let contador = 1


function desaparecer(){
    botonActivar.disabled = true 
    tarjetaOfertaActivada.hidden = false

    setTimeout(()=>{
        tarjetaOfertaActivada.hidden = true
        botonActivar.disabled = false
    }, 1500)
}

function decidir() {
let respuesta = null 
if (contador === 1) {
    respuesta = true
    mensajeOferta.textContent = "Oferta activada"
    botonActivar.textContent = "Desactivar oferta"
} else {
    respuesta = false 
    mensajeOferta.textContent = "Oferta desactivada"   
    botonActivar.textContent = "Activar oferta"
}
console.log("La respuesta es : " + respuesta)
return respuesta
}


function obtenerOferta(callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        const respuesta = callback() 
        if (respuesta === true){
            resolve({
              nombre: "Café con leche",
              precio: 2.5
            });
        }else {
            reject("Oferta agotada")
        }
    }, 800);
  });
}

async function cargarOferta() {
    try {
    botonVer.disabled = true     
    tarjetaOferta.hidden = true 
    estado.textContent = "cargando..."
    const oferta = await obtenerOferta(decidir)
    tarjetaOferta.hidden = false 
    nombreOferta.textContent = "Oferta : " + oferta.nombre
    precioOferta.textContent = "A tan solo : " + oferta.precio
    estado.textContent = "oferta encontrada"
    }
    catch(error){
        tarjetaOferta.hidden = true
        estado.textContent = "Error : " + error 
    }
    finally {
        botonVer.disabled = false 
    }
}
botonVer.addEventListener("click", () => {
    cargarOferta()

})

botonActivar.addEventListener("click",() => { 
    contador++ 
    if (contador >= 3){
        contador = 1
    }
    decidir()
    
    desaparecer()
    console.log("Contador en : " + contador)
})