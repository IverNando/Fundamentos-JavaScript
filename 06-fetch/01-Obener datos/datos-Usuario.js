const boton = document.getElementById("cargar")
const tarjeta = document.getElementById("tarjeta")
const estado = document.getElementById("estado")
const nombre = document.getElementById("nombre")




async function cargarUsuario(){
    const respuesta = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
        );
    if (!respuesta.ok) {
        throw new Error (`Error HTTP: ${respuesta.status}`)
    }
        const usuario = await respuesta.json();
        return usuario;
    
}

boton.addEventListener("click", async () => {
    tarjeta.hidden = true
    estado.textContent = "cargando..."
    boton.disabled = true 
    
    try { const usuario = await cargarUsuario();

        nombre.textContent = usuario.name;
        tarjeta.hidden = false; 
        estado.textContent = "Listo";

    } catch (error) {
        estado.textContent = `No se pudo cargar: ${error.message}`;
    } finally {
        boton.disabled = false;
    }

})