import React from 'react'
import Navbar from '../src/components/Navbar'
import Sidebar from '../src/components/SideBar'

const App = () => {
  return (
    <div>
      <Navbar/>
      <hr />
      <div className="app-content">
        <Sidebar/>
      </div>
    </div>
  )
}

export default App
