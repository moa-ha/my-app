import { createRoutesFromElements, Route } from 'react-router-dom'

import Layout from './components/Layout'
import Items from './components/Items'
import AddItemForm from './components/AddItemForm'
import DeleteButton from './components/DeleteButton'
import EditForm from './components/EditForm'
import Home from './components/Home'

export default createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />

    <Route path="/items" element={<Items />} />
    <Route path="/items/add" element={<AddItemForm />} />
    <Route path="/items/delete" element={<DeleteButton />} />
    <Route path="/items/:id" element={<EditForm />} />
  </Route>,
)
