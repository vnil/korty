import { isUri } from 'valid-url'

export const randomizeString = (length = 6) => {
  let text = ''
  var charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

  ;[...Array(length)].forEach(() => {
    text += charset.charAt(Math.floor(Math.random() * charset.length))
  })

  return text
}

//https://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-a-url

export const isValidUrl = (potentialUrl) => {
  return isUri(potentialUrl)
}
