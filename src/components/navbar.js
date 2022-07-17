import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='p-4 bg-slate-600 text-white'>
        <ul className='flex gap-5'>
            <li><Link to = "/">main</Link></li>
            <li><Link to = "/search">search</Link></li>
        </ul>
    </div>
  )
}
