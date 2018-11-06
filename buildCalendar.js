const dates = require('./Data/dates.json')
const times = ["AM", "PM"]
const CalendarClass = require('./Classes/calendarClass')

const buildCalendar = () => {
let calendar = new CalendarClass()

calendar.addTimePossibilitiesToCalendar(times)
calendar.buildCalendar(dates)

return calendar
}

module.exports = buildCalendar

