import { createRoutesFromElements, Route } from 'react-router-dom'

import Layout from './components/Layout'
import ConsumableHome from './components/ConsumableHome'
import AddItemForm from './components/AddItemForm'
import SearchBar from './components/SearchBar'
import DeleteForm from './components/DeleteForm'

export default createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<ConsumableHome />} />
    <Route path="/add" element={<AddItemForm />} />
    <Route path="/delete" element={<DeleteForm />} />
  </Route>,
)
