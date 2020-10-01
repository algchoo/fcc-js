function translatePigLatin(str) {
  const CONSONANTS = /^[^aeiou]+/
  const WAY = 'way'
  const AY = 'ay'

  let consonantSubString = str.match(CONSONANTS)
  if (consonantSubString === null) {
    return str.concat(WAY)
  } else {
    let startIndex = consonantSubString[0].length
    let theRestOfTheString = str.substring(startIndex)
    return theRestOfTheString.concat(consonantSubString[0].concat(AY))
  }
}

translatePigLatin("consonant")
translatePigLatin("glove")
translatePigLatin("algorithm")
translatePigLatin("california")
translatePigLatin("paragraphs")
translatePigLatin("schwartz")
translatePigLatin("rhythm")
