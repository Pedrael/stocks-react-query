import { request } from '../services/getStockRequest'
import { useQuery } from '@tanstack/react-query'
import { returnObjectAsJSX } from '../services/utils'

const stockViewer = () => {
  const { data, error, isLoading } = useQuery<any, Error>({
    queryKey: ['stocks'],
    queryFn: request,
  })
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>An error occurred: {error.message}</div>

  return <div>{returnObjectAsJSX(data)}</div>
}

export default stockViewer
