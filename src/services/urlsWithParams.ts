export const stocksURL = (params: Record<string, string>) =>
  `https://api.polygon.io/v3/reference/tickers?market=stocks&active=true&${new URLSearchParams(
    params,
  ).toString()}`

export type stocksURLParams = {
  date?: string
  limit?: string
  sort?: string
  cursor?: string
}
