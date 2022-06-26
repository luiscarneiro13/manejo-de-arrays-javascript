const words = ['Luis', 'Ana', 'Mariana', 'Santi', 'Luisa']

const newWords = words.filter(item => item.length >= 5)

// console.log(newWords)


/* Otro ejemplo pero con un array de objetos */


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

/** Del objeto orders, se deben mostrar solo los que la orden no ha sido entregada delivered=false */

const ordersDelivered = orders.filter(item => item.delivered)

const ordersNotDelivered = orders.filter(item => !item.delivered)

// console.log('Ordenes Entregadas', ordersDelivered)
// console.log('Ordenes en Espera', ordersNotDelivered)

/** Ahora se realiza una función de búsqueda por parámetros */
/** Le envío un string y regreso un atributo con el número de coincidencias y un objeto con las coincidencias  */

const search = (query) => {
    return orders.filter(item => {
        return item.customerName.includes(query)
    })
}

console.log(search('Luisa'))






