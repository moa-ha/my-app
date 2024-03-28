import { createRoutesFromElements, Route } from 'react-router-dom'

import Layout from './components/Layout'
import App from './components/App'
import AddItemForm from './components/AddItemForm'
import SearchBar from './components/SearchBar'

export default createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<App />} />
    <Route path="/add" element={<AddItemForm />} />
  </Route>,
)
