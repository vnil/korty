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
  return !!isWebUri(potentialUrl) || potentialUrl === ''
}

export const generateUniqueUrlCode = (redirectObjects) => {
  const existingCodes = redirectObjects.map(obj => obj.kortyCode)
  const newCode = randomizeString()
  if (existingCodes.includes(newCode)) {
    return generateUniqueUrlCode(redirectObjects)
  }
  return newCode
}
