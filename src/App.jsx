import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import LoginPage from './pages/LoginPage/LoginPage'
import HomePage from './pages/Homepage'
import Teams from './pages/Teams'
import TeamDetailPage from './pages/TeamDetailPage'
import Players from './pages/Players'
import PlayerDetailPage from './pages/PlayerDetailPage'
import AddPlayer from './pages/AddPlayer'


const App = () => {
  return (
    <>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/homepage/*' element={<HomePage />} />
          <Route path='/teams' element={<Teams />}>Teams</Route> 
          <Route path='/teams/:teamId' element={<TeamDetailPage />} />
          <Route path='/players' element={<Players />} />
          <Route path='/players/:playerId' element={<PlayerDetailPage />}></Route>
          <Route path='/players/addPlayer' element={<AddPlayer />} />
        </Routes>
    </>
  )
}

export default App
