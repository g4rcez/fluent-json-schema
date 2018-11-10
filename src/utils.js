const isFluentSchema = obj => typeof obj.anyOf === 'function'

const hasCombiningKeywords = attributes =>
  attributes.anyOf || attributes.anyOf || attributes.anyOf || attributes.not

const last = arr => {
  const [prop] = [...arr].reverse()
  return prop
}

const flat = array =>
  array.reduce((memo, prop) => {
    const { name, ...rest } = prop
    return {
      ...memo,
      [name]: rest,
    }
  }, {})

module.exports = {
  isFluentSchema,
  hasCombiningKeywords,
  last,
  flat,
}