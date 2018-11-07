const buildScores = require('./buildScores')
const buildPeople = require('./buildPeople')
const buildCalendar = require('./buildCalendar')
const randomSort = require('./randomSort')
const hash = require('object-hash')
const getAllPermutations = require('./getAllPermutations')


let scores = buildScores()
let people = buildPeople()
let calendar = buildCalendar()

let totalDates = people[0].dates.length
let allCalendars = []
let allCalendarHashes = []

const allPeopleCombinations = getAllPermutations(people)

for(let x=1; x<20; x++){
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
    let calendarHash = hash(jsonCalendar)
    if(allCalendarHashes.includes(calendarHash)){
        x-=1
        console.log('same hash')
    }else{
        allCalendarHashes.push(calendarHash)
        allCalendars.push({score: calendarValue, calendar: jsonCalendar})
    }
    calendar.resetCalendar()
    randomSort(people)
}

allCalendars.sort(function(a,b){return b.score - a.score})

// allCalendars.forEach(calendar => {
//     console.log(calendar)
// })
console.log(allCalendars.length)
console.log(allCalendars[0])