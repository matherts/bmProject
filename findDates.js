const buildScores = require('./buildScores')
const buildPeople = require('./buildPeople')
const buildCalendar = require('./buildCalendar')
const randomSort = require('./randomSort')

let scores = buildScores()
let people = buildPeople()
let calendar = buildCalendar()

let totalDates = people[0].dates.length
let allCalendars = []

for(let x=1; x<10; x++){
    console.log('attempt#', x)
    people.forEach(person => {
        let times = person.outputTimePreference()
        let index = 0
        let date = person.dates[0]
        let isAvailable = false
        do{
            date = person.dates[index]
            isAvailable = calendar.checkIfDateAvailable(date, times[0])
            if(isAvailable){
                calendar.assignDate(date, times[0], person)
            }else{
                isAvailable = calendar.checkIfDateAvailable(date, times[1])
                if(isAvailable){
                    calendar.assignDate(date, times[1], person)
                }else{
                    index++
                }
            }
            if(index===totalDates){
                calendar.findAvailableDate(times)
            }
        }while(isAvailable === false)

        scores.addScoreToCalendar(calendar.calendarDates, person.bmDate, person )

    })

    let calendarValue = scores.scoreCalendar(calendar.calendarDates)

    let jsonCalendar = calendar.calendarToJSON()

    allCalendars.push({score: calendarValue, calendar: jsonCalendar})

    calendar.resetCalendar()
    randomSort(people)
}

console.log(allCalendars)


