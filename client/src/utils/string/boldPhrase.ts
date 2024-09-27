export const boldPhrase = (phrase: string, line: string): string => {
  const regExp = new RegExp(phrase, 'gi')
  const res = line.replace(regExp, phrase => `<b>${phrase}</b>`)

  return res
}
