class Calendar {
    constructor(){
        this.calendarDates = {}
    }

    addTimePossibilitiesToCalendar(times){
        this.times = times
    }
    
    addDateToCalendar(date){
        calendarDates[date] = {score: 0}
        this.times.forEach(time => {
            calendarDates[date][time] = {}
        })
    }

    buildCalendar(dates){
        dates.forEach(date => {
            this.addDateToCalendar(date)
        })
        this.calendarForDuplicate = JSON.parse(JSON.stringify(this.calendarDates))
    }

    resetCalendar(){
        this.calendarDates = JSON.parse(JSON.stringify(this.calendarForDuplicate))
    }

}