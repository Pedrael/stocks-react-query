import { RequestMethods } from '../constants'
import { api } from '../keys.json'
const url =
  'https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2023-01-09/2023-01-09'
const method = RequestMethods.get
const headers = {
  Authorization: 'Bearer ' + api,
}
export const request = async () => {
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
