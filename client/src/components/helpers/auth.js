export const getTokenFromLocalStorage = () => {
  console.log('getting tokent from local storage')
  return window.localStorage.getItem('teachers-token')
}


export const getPayload = () => {
  const token = getTokenFromLocalStorage() 
  console.log('I am the token', token)
  if (!token) return
  const splitToken = token.split('.')
  if (splitToken.length !== 3) return
  console.log(splitToken[1])
  return JSON.parse(Buffer.from(splitToken[1], 'base64'))
}


export const userIsAuthenticated = () => {
  const payload = getPayload()
  if (!payload) return
  const currentTime = Math.round(Date.now() / 1000)
  return currentTime < payload.exp
}