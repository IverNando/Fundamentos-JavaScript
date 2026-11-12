const estado = document.getElementById("estado")
const boton = document.getElementById("cargar-oferta")
const nombreOferta = document.getElementById("nombre-oferta")
const precioOferta = document.getElementById("precio-oferta")
const tarjetaOferta = document.getElementById("tarjeta-oferta")


function obtenerOferta() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        nombre: "Café con leche",
        precio: 2.5
      });
    }, 800);
  });
}

async function cargarOferta() {
    tarjetaOferta.hidden = true 
    estado.textContent = "cargando..."
    const oferta = await obtenerOferta()
    tarjetaOferta.hidden = false 
    nombreOferta.textContent = "Oferta : " + oferta.nombre
    precioOferta.textContent = "A tan solo : " + oferta.precio
    estado.textContent = "oferta encontrada"

}
boton.addEventListener("click", () => {
    cargarOferta()
})