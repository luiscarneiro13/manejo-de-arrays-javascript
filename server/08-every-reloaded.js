/* Ejemplo con fechas. Con un objeto dado, se debe buscar si hay fechas que chocan */
/* Este ejercicio funciona para calendarios */

const fechas = [
    {
        startDate: new Date(2021, 1, 1, 20), // 08:00pm
        endDate: new Date(2022, 1, 1, 21, 30), // 09:30pm
        title: 'Cena'
    },
    {
        startDate: new Date(2021, 1, 1, 12), // 12:00pm
        endDate: new Date(2022, 1, 1, 12, 30), // 12:30pm
        title: 'Almuerzo'
    }
]

/* Aquí creo una nueva fecha que quiero agregar al calendario */
const newFecha = {
    startDate: new Date(2021, 1, 1, 20, 30), // 08:30pm
    endDate: new Date(2022, 1, 1, 21), // 09:00pm
}

/* Importo la función overlapping de date-fns para ver si dos rangos de fecha se sobreponen */
const areIntervalsOvelapping = require('date-fns/areIntervalsOverlapping')

/* Ésta función retornará true si se solapa la fecha que estoy tratando de ingresar, con las fechas que ya tengo */
const isOverlap = (newDate) => {
    return fechas.some(item => {
        return areIntervalsOvelapping(
            { start: item.startDate, end: item.endDate }, // Fecha que ya está agendada
            { start: newDate.startDate, end: newDate.endDate } // Fecha que quiero agendar
        )
    })
}

console.log(isOverlap(newFecha))