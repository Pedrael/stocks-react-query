import { request } from '../services/getStockRequest'
import { useInfiniteQuery } from '@tanstack/react-query'
import { returnObjectAsJSX } from '../services/utils'
import { ReactQueryKeys } from '../constants'
import { stocksURL, stocksURLParams } from '../services/urlsWithParams'

const params: stocksURLParams = {
  limit: '1',
}

const stockViewer = () => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: [ReactQueryKeys.stocks],
    //queryFn: () => request(params),
    queryFn: ({ pageParam = stocksURL(params) }) =>
      request(pageParam as string),
    initialPageParam: undefined, // initial request doesnt have 'cursor' parameter so it is undefined
    getNextPageParam: (lastPage) => lastPage.next_url, // URL that we get from previous request
    staleTime: 2000,
  })

  return status === 'pending' ? (
    <p>Loading...</p>
  ) : status === 'error' ? (
    <p color="red">Error: {error.message}</p>
  ) : (
    <>
      <>{returnObjectAsJSX(data.pages)}</>
      <div>
        <button
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage
            ? 'Loading more...'
            : hasNextPage
            ? 'Load More'
            : 'Nothing more to load'}
        </button>
      </div>
      <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>
    </>
  )
}

export default stockViewer
