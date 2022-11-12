import { Routes, Route } from 'react-router-dom'
import Room from '../pages/Room'
import Auth from '../pages/Auth'

const MainRoute = () => {
  return (
    <Routes>
        <Route path='/' element={<Auth />} />
        <Route path='/room' element={<Room />} />
    </Routes>
  )
}

export default MainRoute