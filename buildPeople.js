//this is to build out t
const PersonClass = require('./Classes/personClass')

const buildPeople = (peopleData) => {
let allPeople = []
peopleData.forEach(person => {
    let newPerson = new PersonClass(person.name)
    newPerson.addDates(person.dates)
    newPerson.addTimePreference(person.time)
    allPeople.push(newPerson)
})
return allPeople

}

module.exports = buildPeople


