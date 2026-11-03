
function crearInventario(){

    let stock = {
        bebidas: 10,
        alimentos:10,
        productosDeLimpieza:10
    }
    
        return {
            agregar: function(cantidad, propiedad){
                if (Object.hasOwn(stock, propiedad) && Number.isFinite(cantidad) && Number.isInteger(cantidad) && cantidad > 0 ) {
                     stock[propiedad] += cantidad
                   return true  
                } else {
                    console.log("use un valor correcto o ingrese un producto existente")
                    return false }       
            },
            vender: function(cantidad, propiedad) {
                if (Object.hasOwn(stock, propiedad) && Number.isFinite(cantidad) && Number.isInteger(cantidad) && cantidad > 0
            && cantidad <= stock[propiedad]) {
                    stock[propiedad] -= cantidad
                    return true }
                else {
                    console.log("no es posible vender producto porque no existe o el valor es erroneo")
                    return false
                }
            }, 
            consultar: function(propiedad){
                if (propiedad === undefined) {
                    console.log(stock)
                    return {...stock}

                }
                else if (Object.hasOwn(stock, propiedad)){
                    console.log(propiedad, stock[propiedad])
                    return stock[propiedad]
                }
                
                else {
                    console.log("categoria no encontrada")
                    return false
                }
            }
        } 
    }

const accion = crearInventario()


