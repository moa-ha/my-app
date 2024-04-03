import { createRoutesFromElements, Route } from 'react-router-dom'

import Layout from './components/Layout'
import ConsumableHome from './components/ConsumableHome'
import AddItemForm from './components/AddItemForm'
import DeleteButton from './components/DeleteButton'
import EditForm from './components/EditForm'

export default createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<ConsumableHome />} />
    <Route path="/add" element={<AddItemForm />} />
    <Route path="/delete" element={<DeleteButton />} />
    <Route path="/:id" element={<EditForm />} />
  </Route>,
)
