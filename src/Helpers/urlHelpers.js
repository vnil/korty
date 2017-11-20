export const randomizeString = (length = 6) => {
  let text = ''
  var charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

  [...Array(length)].forEach(() => {
    text += charset.charAt(Math.floor(Math.random() * charset.length))
  })

  return text
}
