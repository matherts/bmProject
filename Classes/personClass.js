class Person {
    constructor(name){
        this.name = name
    }

    addSchool(school){
        this.school = school
    }

    addCity(city){
        this.city = city
    }

    addDates(dates){
        this.dates = dates
    }

    //timePreference 1 is AM, 2 is PM, 0 is no preference
    addTimePreference(timePreference){
        this.timePreference = this.convertTimeToValue(timePreference)
    }

    selectDate(date){
        this.bmDate = date
    }

    selectTime(time){
        this.bmTime = time
    }

    changeTimeFromString(){
        let time = this.bmTimeString.split(':')
        const day = new Date()
        day.setHours(time[0])
        let minutes = time[1].split('abcdefghijklmnopqrstuvwxyz')
        day.setMinutes(minutes[0])
        let timeZone = time[1].split('1234567890')
        this.timeZone = timeZone[0]
    }

    dateRank(date){
        let rank = this.dates.findIndex(preferenceDate =>{
            return preferenceDate === date
        })
        return rank
    }

    convertTimeToValue(AMorPM){
        this.timePreferenceString = AMorPM
        if(AMorPM==='AM'){
            return 1
        }else if(AMorPM==='PM'){
            return 2
        }else{
            return 0
        }
    }

    timeRank(AMorPM){
        let timeValue = this.convertTimeToValue(AMorPM)
        if(this.timePreference === 0){
            return .5
        }else if(this.timePreference === timeValue){
            return 1
        }else if(this.timePreference !== timeValue){
            return 0
        }else{
            return 'error'
        }
    }

    outputTimePreference(){
        if(this.timePreference===1){
            return ["AM", "PM"]
        }else{
            return ["PM", "AM"]
        }
    }

}

module.exports = Person