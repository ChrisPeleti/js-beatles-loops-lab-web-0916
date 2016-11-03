function theBeatlesPlay( mus_arr, inst_arr) {
  var combin_arr = []
  for (var cv = 0; cv < 4; cv++) {
    combin_arr.push(`${mus_arr[cv]} plays ${inst_arr[cv]}`)
  }
  return combin_arr
}

function johnLennonFacts(facts) {
  var exc_facts = []
  var num_ele = facts.length
  for (var cv = 0; cv < num_ele; cv++) {
    exc_facts.push(`${facts[cv]}!!!`)
  }
  return exc_facts
}

function iLoveTheBeatles(num) {
  var arr = []
  do {
    arr.push("I love the Beatles!");
      num++;
    } while (num < 15)
    return arr
}
