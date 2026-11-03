const planta = {agua: 10}

function regadera(){


    let nivelDeAgua = 10;

    return {
        regar: function() { 
            if (nivelDeAgua > 0)
                {
            planta.agua += 1;
            nivelDeAgua -= 1;
            } 
            else {
            console.log("rellenar regadera");
            }
        },
        recargar: function() {
            nivelDeAgua = 10; 
        },
        mostrar: function() {
            return console.log(nivelDeAgua);
        }
    }
}

const accion = regadera()


accion.mostrar()
console.log(accion.nivelDeAgua)



