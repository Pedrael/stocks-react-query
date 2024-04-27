import { RequestMethods } from '../constants'
import { api } from '../keys.json'

const method = RequestMethods.get
const headers = {
  Authorization: 'Bearer ' + api,
}
export const request = async (url: string) => {
  const response = await fetch(url, {
    method: method,
    headers: headers,
  })

  if (!response.ok) {
    throw new Error(
      `Network response was not ok. ${
        response.statusText
      } METHOD: ${method} HEADERS: ${JSON.stringify(headers)} `,
    )
  }
  return await response.json()
}
