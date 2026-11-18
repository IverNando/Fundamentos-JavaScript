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
        const error = new Error (`HTTP ${response.status}: ${response.statusText}`);
        error.status = response.status;
        throw error;
         
    }
    const usuario = await response.json()
    return usuario
} 


form.addEventListener(`submit`, async (event)=>{
event.preventDefault()
const id = input.value
boton.disabled = true
tarjeta.hidden = true
estado.textContent = "Cargado..."
    try {
        const usuario = await obtenerUsuario(id)
        h2.textContent = usuario.name
        correo.textContent = usuario.email
        tarjeta.hidden = false 
        estado.textContent = "Búsqueda Terminada"
        
    } catch(error) {
        console.error(error);
        if (error.status === 404) {
        estado.textContent = "No existe un usuario con ese ID." 
        } else if (error.status === undefined) {
        estado.textContent = "No se pudo obtener una respuesta válida"
        } else if (error.status >= 500 && error.status <= 599) {
            estado.textContent = "El servidor tiene un problema temporal. Inténtalo más tarde"
        } else {
        estado.textContent = "No se pudo cargar el usuario."
        }

    } finally{
        boton.disabled = false
        console.log("Proceso terminado")
    }


})