const findPermutations = (str) => {
  if (str.length < 2 ){
    return [str]
  }
  const permutationsArray = []    
  for (let i = 0; i < str.length; i++){
    let char = str[i]
    if (str.indexOf(char) != i){
      continue
    }
    let remainingChars = str.slice(0, i) + str.slice(i + 1, str.length)
    for (const permutation of findPermutations(remainingChars)){
      permutationsArray.push(char + permutation) 
    }
  }
  return permutationsArray
}

const sortStr = str => str.split('').sort((a, b) => a.localeCompare(b)).join('')

function listPosition(word) {
  return findPermutations(sortStr(word)).findIndex(w => w === word) + 1;
}

//It works for small test but not for big ones (up to 25 letters). How to solve?
