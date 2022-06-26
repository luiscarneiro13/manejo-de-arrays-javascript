const items = [1, 3, 2, 3, 4, 2, 3]


const result = items.reduce((obj, item) => {
    /* Inicialio el item a 1, esto es si el item no existe */
    if (!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item] += 1
    }

    return obj
}, {})

// console.log(result)
/* output
    {
        1:1,
        3:2,
        2:1
    }
*/

/* Puedo tambien tener un objeto con la cuenta total de apariciones */
/* Retornar un objeto con los totales de ordernes entregadas y no entregadas del array de orders */

const orders = [
    {
        customerName: 'Luis',
        total: 100,
        delivered: true
    },
    {
        customerName: 'Luis',
        total: 200,
        delivered: false
    },
    {
        customerName: 'Luis',
        total: 300,
        delivered: true
    },
    {
        customerName: 'Mariana',
        total: 400,
        delivered: true
    },
    {
        customerName: 'Santi',
        total: 500,
        delivered: false
    },
    {
        customerName: 'Luisa',
        total: 600,
        delivered: true
    },
    {
        customerName: 'Ana',
        total: 700,
        delivered: false
    },
    {
        customerName: 'Ana',
        total: 800,
        delivered: true
    },
]

/* Primero genero un array con delivered */
const delivererdArray = orders.map(item => item.delivered)

/* Con el array anterior hago las sumatorias mediente la función reduce */

const deliveredReduce = delivererdArray.reduce((obj, item) => {

    if (!obj[item]) {
        obj[item] = 1
    } else {
        obj[item] += 1
    }

    return obj

}, {})

console.log(deliveredReduce)










