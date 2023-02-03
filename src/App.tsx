import { NavBar } from './components/NavBar'
import { Welcome } from './components/Welcome'
import { Route, Routes } from 'react-router-dom'
import { Explore } from './pages/Explore'
import { PartnetWall } from './pages/PartnetWall'
import { SignUp } from './pages/SignUp'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/">
          <Route path=':userId' element={<PartnetWall />} />
          <Route path='' element={<Welcome />} />
        </Route>
        <Route path="explore" element={<Explore />} />
        <Route path="sign-up" element={<SignUp />} />
      </Routes>
    </>
  )
}

export default App
