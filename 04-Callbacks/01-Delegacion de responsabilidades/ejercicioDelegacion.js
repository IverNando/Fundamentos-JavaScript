

function procesarUsuario(nombre, edad, mostrarResultado) {
    
    const puedeAcceder = edad >= 18 

    mostrarResultado(nombre, puedeAcceder)
}
function mostrarResultado(nombre, puedeAcceder){
    if (puedeAcceder) {
        console.log("Bienvenido/a " + nombre)
    } else {
        console.log(nombre + ", no puedes acceder")
    }
}

procesarUsuario("Carlos", 15, mostrarResultado );
procesarUsuario("Ana", 22, mostrarResultado );