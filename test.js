const dateForBM = require('./dateClass')
const person = require('./personClass')

const day1 = new dateForBM('8/12/2018', ['10:30am', '4:30pm'])

day1.buildTimeSlots()

console.log(day1.date)
console.log(day1.times)
console.log(day1.timeSlots)

const jim = new person('Jim')

jim.addDates(['8/12/2018'])


let m = '10:30am'
let time = m.split(':')
console.log(time[0])
const day = new Date()
day.setHours(time[0])
let minutes = time[1].split('abcdefghijklmnopqrstuvwxyz')
// day.setMinutes(minutes[0])
let timeZone = time[1].split('1234567890')
// this.timeZone = timeZone[0]

console.log(day.getHours())