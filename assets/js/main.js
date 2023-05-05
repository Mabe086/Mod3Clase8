const id = Symbol('id')
var persona = {}
persona[id] = 18
persona.nombre = "Diego"
persona.apellido = "Sandoval"
persona['edad'] = 28
// console.log(persona[id])

var llaves = Object.keys(persona)
var valores = Object.values(persona)
var atributos = Object.entries(persona)
var simbolos = Object.getOwnPropertySymbols(persona)

// console.log(persona);
// console.log("Llaves", llaves);
// console.log("Valores", valores);
// console.log("Atributos", atributos);
// // console.log("Simbolos", simbolos);
// // console.log(persona[simbolos[0]]);

// console.log("-------------------------------");
// for (const key of atributos) {
//     console.log(key[0],"-",key[1])
// }

//Objeto con valores
var vehiculo = {
    patente: 'ABCD12',
    marca: 'Chevrolet',
    modelo: 'Camaro',
    anio: '2023',
}


console.log("Vehiculo", vehiculo);

//Objeto Proxy (Intermediario)
var proxyVehiculo = new Proxy(vehiculo, 
    {
    // Get nos permite obtener el valor de cualquier propiedad
        get: function (target, property) {
            if (typeof target[property] == 'string') {
                return target[property].toUpperCase()
            } else {
                return target[property]
            }
        },
    // Set nos permite modificar el valor de cualquier propiedad
        set: function (target, property, value) {
            if (property == 'anio' && typeof value !== 'number') {
                return target[property] = null
            } else if(typeof value == 'string'){
                return target[property] = value.toLowerCase
            } else {
                return target[property] = value
            }
        }
    }
)

proxyVehiculo.anio = "2023"
proxyVehiculo.modelo = "Optra"

console.log("Proxy Vehiculo - Marca", proxyVehiculo.marca);
console.log("Proxy Vehiculo - Año", proxyVehiculo.anio);

console.log(proxyVehiculo);