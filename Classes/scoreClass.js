class Score {
    constructor(){

    }

    //date Importance Value is on scale of 1 to 10
    dateImportanceVariables(dateValue, amountOfDates){
        this.dateValues = []
        let valueSquareRoot = Math.sqrt(dateValue)
        for(let x=0; x<amountOfDates; x++){
            this.dateValues.unshift(valueSquareRoot * (x+1))
        }
    }

    //time Importance Values is on a scale of 1 to 5
    timeImportanceVariable(timeValue){
        this.timeValue = timeValue
    }

    //this scores the person using the person's time and the person's date that were picked
    scorePerson(person){
        let dateRank = person.dateRank(person.bmDate)
        let timeRank = person.timeRank(person.bmTime)
        let value = this.dateValues[dateRank] + this.timeValue * timeRank
        return value
    }

    addScoreToCalendar(calendar, date, person){
        let personScore = this.scorePerson(person)
        calendar[date].score += personScore
    }

    //this scores an entire calendar
    scoreCalendar(calendar){
        let calendarValue = 0
        Object.keys(calendar).forEach(date => {
            calendarValue += calendar[date].score
        })
        return calendarValue
    }

}

module.exports = Score