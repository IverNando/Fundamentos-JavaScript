const userOne = document.getElementById("id-uno")
const usertwo = document.getElementById("id-dos")
const form = document.getElementById("formulario")
const resultadosHtml = document.getElementById("resultados")
const nombreUno = document.getElementById("nombre-uno")
const nombreDos = document.getElementById("nombre-dos")
const correoUno = document.getElementById("correo-uno")
const correoDos = document.getElementById("correo-dos")
const boton = document.getElementById("buscar")
const estado = document.getElementById("estado")


async function cargarUsuario(id) {
    
    const response = await fetch 
    (`https://jsonplaceholder.typicode.com/users/${id}`)
    if (!response.ok) {
        const error = new Error (`HTTP ${response.status} : ${response.statusText}`)
        error.status = response.status
        throw error
    } 
    const usuario = await response.json()
    return usuario 
}

function esperar(ms) {
    return new Promise ((resolve, reject)=>{
        if (Number.isInteger(ms) && ms > 0) {

            setTimeout(()=>{
                resolve(`Terminó la espera. \nAra te amo`)}, ms)

        } else {
            const error = new Error ("Ingresa un valor válido")
            reject(error)
                   
            }  
    })
}


form.addEventListener('submit', async (event) => {
    event.preventDefault()
    const idOne = userOne.value
    const idTwo = usertwo.value
    resultadosHtml.hidden = true 
    boton.disabled = true 
    estado.textContent = "Cargando..."


    try {

        const resultados = await Promise.all([esperar(800), cargarUsuario(idOne), cargarUsuario(idTwo)])
        const fisrtUser = resultados[1]
        const secondUser = resultados[2]
        estado.textContent = "Busqueda con exito"
        resultadosHtml.hidden = false
        nombreUno.textContent = fisrtUser.name
        correoUno.textContent = fisrtUser.email
        nombreDos.textContent = secondUser.name
        correoDos.textContent = secondUser.email

    } catch (error) {
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
        console.log("Proceso terminado")
        boton.disabled = false
    }

})