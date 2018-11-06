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

    checkIfTimeAvailable(time){
        if(this.timeSlots[time].length === 0){
            return true
        }else{
            return false
        }
    }

    //should maybe eventually put in adding rank here
    assignTime(time, person){
        this.timeSlots[time].push(person.name)
        person.selectTime(time)
        person.selectDate(this.date)
    }

    resetTimes(){
        Object.keys(this.timeSlots).forEach(time =>{
            this.timeSlots[time].length = 0
        })
    }


}

module.exports = DateForBM