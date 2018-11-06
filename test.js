const buildCalendar = require('./buildCalendar')

let calendar = buildCalendar()

let dates = Object.keys(calendar.calendarDates)

// console.log(dates)

dates.forEach(date => {
    console.log(calendar.calendarDates[date].date)
})