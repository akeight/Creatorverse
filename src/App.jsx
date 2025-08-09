import "./style.scss"
import "./App.css"
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
        {path: '/:id', element: <ViewCreator /> },
        {path: '/add-creator', element: <AddCreator /> },
        {path: '/edit/:id', element: <EditCreator /> },
        {path: '/', element: <ShowCreators />}
      ]
    },
  ]

  const element = useRoutes (routes)
  return element

}

export default App
