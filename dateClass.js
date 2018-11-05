class DateForBM {
    constructor(date, times){
        this.date = date
        this.times = times
    }

    buildTimeSlots(){
        this.timeSlots = {}
        let times = this.times
        times.forEach(time => {
            this.timeSlots[time] = []
        })
    }

}

module.exports = DateForBM