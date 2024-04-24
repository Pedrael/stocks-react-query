import StockViewer from './components/stockViewer'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <StockViewer />
    </QueryClientProvider>
  )
}

export default App
