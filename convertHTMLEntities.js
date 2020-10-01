function convertHTML(str) {
  const HTML_ENTITIES = {
    0: ['&', '&amp;'],
    1: ['<', '&lt;'],
    2: ['>','&gt;'],
    3: ['"', '&quot;'],
    4: ["'", '&apos;']
  }

  const SIZE = Object.keys(HTML_ENTITIES).length
  let newStr = str

  for (let i = 0; i < SIZE; i++) {
    if (str.includes(HTML_ENTITIES[i][0])) {
      let regex = new RegExp(HTML_ENTITIES[i][0], 'g')
      newStr = newStr.replace(regex, HTML_ENTITIES[i][1])
    }
  }

  return newStr
}

convertHTML("Dolce & Gabbana")
convertHTML("Hamburgers < Pizza < Tacos")
convertHTML("Sixty > twelve")
convertHTML('Stuff in "quotation marks"')
convertHTML("Schindler's List")
convertHTML("<>")
convertHTML("abc")