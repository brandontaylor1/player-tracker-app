import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from '../components/pageComponents/Header'
import Footer from '../components/pageComponents/Footer'
import Teams from '../pages/Teams'
import TeamDetailPage from './TeamDetailPage'
import Players from '../pages/Players'
import PlayerDetailPage from './PlayerDetailPage'
import AddPlayer from './AddPlayer'

const Homepage = () => {
  return (
    <>
        <Header />
            <Routes>
                <Route path='/teams' element={<Teams />}>Teams</Route> 
                <Route path='/teams/:teamId' element={<TeamDetailPage />} />
                <Route path='/players' element={<Players />} />
                <Route path='/players/:playerId' element={<PlayerDetailPage />}></Route>
                <Route path='/players/addPlayer' element={<AddPlayer />} />
            </Routes>
    </>
  )
}

export default Homepage
