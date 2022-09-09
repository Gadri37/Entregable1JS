//Mi array de pizzas
const arrayDePizza = [{
    id: 1,
    nombre:'Margarita',
    ingredientes: ['queso','salsa de tomate','albahaca'],
    precio: 600
},
{
    id: 2,
    nombre:'Cuatro quesos',
    ingredientes: ['queso mozzarela','salsa de tomate','queso parmesano','queso provolone','queso azul'],
    precio: 1100
},
{
    id: 3,
    nombre:'Pepperoni',
    ingredientes: ['queso','salsa de tomate','pepperoni'],
    precio: 700
},
{
    id:4,
    nombre:'con Champiñones',
    ingredientes: ['queso','salsa de tomate','champiñones'], 
    precio: 800
},
{
    id: 5,
    nombre:'Hawaiana',
    ingredientes: ['queso','salsa de tomate','ananá'],
    precio: 900
},
{
    id: 6,
    nombre:'Napolitana',
    ingredientes: ['queso','salsa de tomate','tomate'],
    precio: 1000
}]
//Filtramos las pizzas con id impar
const pizzasImpar = arrayDePizza.filter((idpizza) => {
    return idpizza.id % 2 !==0;
})
//Hacemos un array con los mensajes que deseamos
const pizzasImpar2 = pizzasImpar.map((cadapizza) => {
    return "Las opciones impares son "+ cadapizza.nombre;
})
//loguamos el mensaje de opciones de pizzas con id impar con un for
for (i=0 ; i<pizzasImpar2.length; i++){
    console.log(pizzasImpar2[i]);
}

//Hay alguna pizza que valga menos de $600?

const menosDe600 = arrayDePizza.some((pizza) => pizza.precio < 600)


//loguear si la hay o no
const loguear = (elprecio) => {
    if (elprecio < 600) {
        return "No hay pizza disponible que valga menos de $600"
    }
    else {
        return "Si hay pizza disponible que valga menos de $600"
    }
}
console.log(loguear(menosDe600))

//Hacemos un array con los nombres y sus precios
const nombreyprecio = arrayDePizza.map((nombreyprecio) => {
    return "La pizza "+nombreyprecio.nombre +" sale $"+ nombreyprecio.precio
})
//Logueamos con un for recorriendo el array
for (i=0 ; i<nombreyprecio.length; i++){
    console.log(nombreyprecio[i]);
}
//Hacemos un array con los ingredientes de las pizzas
const mostraringredientes = arrayDePizza.map ((pizza) =>{
    return "La pizza "+pizza.nombre +" tiene "+pizza.ingredientes
}) 
//Logueamos con un for recorriendo el array
for (i=0 ; i<mostraringredientes.length; i++){
    console.log(mostraringredientes[i]);
}
