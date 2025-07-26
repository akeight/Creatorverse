import './App.css'
import { useRoutes } from 'react-router-dom'
import ShowCreators from './pages/ShowCreators'
import ViewCreator from './pages/ViewCreator'
import AddCreator from './pages/AddCreator'
import Layout from './components/Layout'
import EditCreator from './pages/EditCreator'

function App() {
  const routes = [
    {
      path: '/',
      element: <Layout />,
      children: [
        {path: '/view/:id', element: <ViewCreator /> },
        {path: '/add-creator', element: <AddCreator /> },
        {path: '/view/:id/edit', element: <EditCreator /> },
        {path: '/view', element: <ShowCreators />}
      ]
    },
  ]

  const element = useRoutes (routes)
  return element

}

export default App
