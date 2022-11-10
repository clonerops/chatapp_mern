import { Routes, Route } from 'react-router-dom'
import Room from '../pages/Room'
import Signup from '../pages/Signup'

const MainRoute = () => {
  return (
    <Routes>
        <Route path='/' element={<Signup />} />
        <Route path='/room' element={<Room />} />
    </Routes>
  )
}

export default MainRoute