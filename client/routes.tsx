import { createRoutesFromElements, Route } from 'react-router-dom'

import Layout from './components/Layout'
import Items from './components/Items'
import AddItemForm from './components/AddItemForm'
import EditForm from './components/EditForm'

export default createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route path="/items" element={<Items />} />
    <Route path="/items/add" element={<AddItemForm />} />
    <Route path="/items/:id" element={<EditForm />} />
  </Route>,
)
