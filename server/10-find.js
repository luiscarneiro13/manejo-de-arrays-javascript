const numbers = [1, 30, 49, 29, 10, 13]

/* Buscar el elemento 30 */

const resp = numbers.find(item => item === 30)

// console.log(resp)

/** Traer el objeto que tiene id=3*/
const products = [
    {
        id: 1,
        name: 'Pizza',
        price: 10
    },
    {
        id: 2,
        name: 'Pizza doble',
        price: 20
    },
    {
        id: 3,
        name: 'Pizza triple',
        price: 30
    },
    {
        id: 4,
        name: 'Pizza cuádruple',
        price: 40
    },
]

const resp2 = products.find(item => item.id === 3)

console.log('Find: ', resp2)

/** Ahora voy atrer la posición del objeto con id=3*/

const resp3 = products.findIndex(item => item.id === 3)
console.log('FindIndex: ', resp3)