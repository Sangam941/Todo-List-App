import React from 'react'
import Navbar from './components/Navbar'
import TaskSection from './components/TaskSection'


const App = () => {
  return (
    <>
      <div className='w-full h-screen'>
        <Navbar />
        <TaskSection />
      </div>
    </>
  )
}

export default App
