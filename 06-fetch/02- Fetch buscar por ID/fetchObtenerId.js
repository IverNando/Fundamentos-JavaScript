const input = document.getElementById("usuario-id")
const form = document.getElementById("formulario")
const estado = document.getElementById("estado")
const boton = document.getElementById("buscar") 
const tarjeta = document.getElementById("tarjeta")
const h2 = document.getElementById("nombre")
const correo = document.getElementById("correo")


async function obtenerUsuario(id){
    
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if (!response.ok) {
        throw new Error (`HTTP ${response.status}`)
    }
    const usuario = await response.json()
    return usuario
} 


form.addEventListener(`submit`, (event)=>{
event.preventDefault()
const id = input.value
boton.disabled = true
tarjeta.hidden = true
estado.textContent = "Cargado..."
setTimeout (async ()=>{
    try {
        const usuario = await obtenerUsuario(id)
        h2.textContent = usuario.name
        correo.textContent = usuario.email
        tarjeta.hidden = false 
        estado.textContent = "Busqueda Terminada"
        
    } catch(error) {
        console.error(error);
        estado.textContent = `No se pudo cargar: ${error.message}`
    } finally{
        boton.disabled = false
        console.log("Proceso terminado")
    }

},1500)
})