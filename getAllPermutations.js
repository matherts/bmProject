const getAllPermutations = (arr) => {
    const results = []
  
    if (arr.length === 1) {
      results.push(arr)
      return results
    }
  
    for (var i = 0; i < arr.length; i++) {
      var firstItem = arr[i]
      var itemsLeft = [...arr.slice(0, i), ...arr.slice(i + 1)]
      var innerPermutations = getAllPermutations(itemsLeft)
      for (var j = 0; j < innerPermutations.length; j++) {
        let newArray = []
        newArray.push(firstItem)
        newArray.push(...innerPermutations[j])
        results.push(newArray)
      }
    }
    return results
  }

module.exports = getAllPermutations