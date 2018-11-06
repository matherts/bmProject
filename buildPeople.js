//this is to build out t

const peopleData = require('./Data/people.json')
const PersonClass = require('./Classes/personClass')

const buildPeople = () => {
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


