import { Routes, Route } from 'react-router-dom'
import Signup from '../pages/Signup'

const MainRoute = () => {
  return (
    <Routes>
        <Route path='/' element={<Signup />} />
    </Routes>
  )
}

export default MainRoute