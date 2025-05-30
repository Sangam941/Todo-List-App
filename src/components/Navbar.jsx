import React from 'react'

const Navbar = () => {
  return (
    <>
        <nav className='w-full bg-purple-900 text-white flex justify-between items-center px-10 py-3'>
            <h2 className='text-2xl font-semibold'>iTask</h2>
            <ul className='list-none text-lg font-medium flex gap-5 cursor-pointer'>
                <li className='active:scale-90'>Home</li>
                <li className='active:scale-90'>Your Tasks</li>
            </ul>
        </nav>
    </>
  )
}

export default Navbar
