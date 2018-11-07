const dateClass = require('./dateClass')

class Calendar {
    constructor(){
        this.calendarDates = {}
    }

    addTimePossibilitiesToCalendar(times){
        this.times = times
    }
    
    addDateToCalendar(date){
        let dateObject = new dateClass(date, this.times)
        dateObject.buildTimeSlots()
        this.calendarDates[date] = {score: 0, date: dateObject}
        // this.times.forEach(time => {
        //    this.calendarDates[date][time] = {}
        // })
    }
    buildCalendar(dates){
        dates.forEach(date => {
            this.addDateToCalendar(date)
        })
        this.calendarForDuplicate = JSON.parse(JSON.stringify(this.calendarDates))
    }

    resetCalendar(){
        Object.values(this.calendarDates).forEach(dateValue => {
            dateValue.date.resetTimes()
            dateValue.score = 0
        })
    }

    checkIfDateAvailable(dateToCheck, time){
        return this.calendarDates[dateToCheck].date.checkIfTimeAvailable(time)
    }

    assignDate(date, time, person){
        this.calendarDates[date].date.assignTime(time, person)
    }

    findAvailableDate(times){
        Object.values(this.calendarDates).find(dateValues =>{
            let dateInformation = dateValues.date
            let available = dateInformation.checkIfTimeAvailable(times[0])
            if(available){
                return true
            }else{
                return dateInformation.checkIfTimeAvailable(times[1])
            }
        })
    }

    calendarToJSON(){
        let calendarJson = {}
        Object.values(this.calendarDates).forEach(dateValues => {
            let dateInformation = dateValues.date
            calendarJson[dateInformation.date] = JSON.stringify(dateInformation.timeSlots)
            // json[date][date]
        })
        return calendarJson
    }

}

module.exports = Calendar