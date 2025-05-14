import React from 'react'
import img from './netflix.jpg'
import MovieList from '../MovieList'
import { Link } from 'react-router-dom'



export default function HeaderFile() {
  return (
    <div>
      <div className='tophead'>
          <div className='header'>
             <img src={img} alt='netflix '></img>
             <p>UNLIMITED TV SHOWS & MOVIES</p>
             <Link to="/signup"><button className='joinnow'>Join Now</button></Link>
              <Link to="/loginpage"><button className='signin'>SignIN</button></Link>
          </div>
       </div>
       <MovieList />
  </div>
  )
}
