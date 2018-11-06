const randomSort = (arr) => {
    arr.sort(function(a, b){return 0.5 - Math.random()})
    return arr
}

module.exports = randomSort