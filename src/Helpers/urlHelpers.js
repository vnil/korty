import { isWebUri } from 'valid-url'

export const randomizeString = (length = 6) => {
  let text = ''
  var charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

  ;[...Array(length)].forEach(() => {
    text += charset.charAt(Math.floor(Math.random() * charset.length))
  })

  return text
}

export const isValidUrl = (potentialUrl) => {
  return !!isWebUri(potentialUrl)
}

export const generateUniqueUrlCode = (existingCodes, randomizer = randomizeString) => {
  const newCode = randomizer()
  if (existingCodes.includes(newCode)) {
    return generateUniqueUrlCode(existingCodes, randomizer)
  }
  return newCode
}

export const makeUrl = (kortyCode) => {
  return window.location.href + kortyCode
}
