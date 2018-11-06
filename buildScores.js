const ScoreClass = require('./Classes/scoreClass')
const scoreValues = {time: 5, date: 10, dateAmounts: 3}

const buildScores = () => {
let score = new ScoreClass()

score.dateImportanceVariables(scoreValues.date, scoreValues.dateAmounts)
score.timeImportanceVariable(scoreValues.time)

return score
}

module.exports = buildScores