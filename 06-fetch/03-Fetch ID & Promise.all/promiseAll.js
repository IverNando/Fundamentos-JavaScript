const formulario = document.getElementById("formulario")
const input = document.getElementById("usuario-id")
const estado = document.getElementById("estado")
const boton = document.getElementById("buscar") 
const tarjeta = document.getElementById("tarjeta")
const h2 = document.getElementById("nombre")
const correo = document.getElementById("correo")


async function cargarUsuario(id) {

    const response = await fetch (
        `https://jsonplaceholder.typicode.com/users/${id}`)
        if (!response.ok) {
            const error = new Error (`HTTP ${response.status} : ${response.statusText}`)
            error.status = response.status 
            throw error 
        }
        const usuario = await response.json()
        return usuario 
}

function esperar(ms){
    return new Promise((resolve, reject)=>{
        
        if (Number.isInteger(ms) && ms > 0) {

            setTimeout(()=>{
                resolve(`Terminó la espera. \nAra te amo`)}, ms)

        } else {
            const error = new Error ("Ingresa un valor válido")
            reject(error)
                   
            }  
    })
}

formulario.addEventListener(`submit`, async (event)=> {
    event.preventDefault()
    const id = input.value
    boton.disabled = true
    tarjeta.hidden = true
    estado.textContent = "Cargando..."
    
    try {
        const resultados = await Promise.all([cargarUsuario(id), esperar(800)])
        const usuario = resultados[0]
        h2.textContent = usuario.name
        correo.textContent = usuario.email
        tarjeta.hidden = false 
        estado.textContent = "Búsqueda Terminada"
        
    } catch(error) {
        console.log(error)
        if (error.status === 404) {
            estado.textContent = "No existen usuarios con ese ID"
        }
        else if (error.status === undefined) {
            estado.textContent = "No se pudo obtener una respuesta válida"
        }
        else if (error.status >= 500 && error.status <= 599) {
            estado.textContent = "Algo pasó con el servidor, inténtalo más tarde"
        }
        else {
            estado.textContent = "No es posible cargar el usuario"
        }

    } finally {
        boton.disabled = false
        console.log("Proceso terminado")
    }
})
