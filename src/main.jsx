import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Body from './components/Body.jsx'
import Games from './components/Games.jsx'
import Faviourite from './components/Faviourite.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import CardInfo from './components/CardInfo.jsx'
import { Car } from 'lucide-react'


const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
  path: '/',
  element: <App />,
  children: [
    { index: true, element: <Body /> },

    {
      path: 'games',
      children: [
        { index: true, element: <Games /> },
        { path: ':name', element: <CardInfo /> }  // /games/name
      ]
    },

    {
      path: 'faviourite',
      children: [
        { index: true, element: <Faviourite /> },
        { path: ':name', element: <CardInfo /> } // /faviourite/name
      ]
    },
  ]
}


])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
)
