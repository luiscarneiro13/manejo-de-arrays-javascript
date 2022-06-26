const orders = [
    {
        customerName: 'Customer 1',
        total: 100,
        delivered: true
    },
    {
        customerName: 'Customer 2',
        total: 200,
        delivered: false
    },
    {
        customerName: 'Customer 3',
        total: 300,
        delivered: true
    },
    {
        customerName: 'Customer 4',
        total: 400,
        delivered: true
    },
    {
        customerName: 'Customer 5',
        total: 500,
        delivered: false
    },
    {
        customerName: 'Customer 6',
        total: 600,
        delivered: true
    },
    {
        customerName: 'Customer 7',
        total: 700,
        delivered: false
    },
    {
        customerName: 'Customer 8',
        total: 800,
        delivered: true
    },
]

const totales = orders.map(item => item.total)

const taxes = orders.map(item => {
    return {
        ...item,
        tax: .19
    }
})

console.log(orders)
console.log(totales)
console.log(taxes)