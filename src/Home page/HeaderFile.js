import img from '../Mainfolder/netflix.jpg'
import MovieList from './MovieList'
import { Link } from 'react-router-dom'
import style from './Header.module.css'



export default function HeaderFile() {
  return (
    <div>
      <div className={style.tophead}>
          <div className={style.header}>
             <img src={img} alt='netflix '></img>
             <p>UNLIMITED TV SHOWS & MOVIES</p>
             <Link to="/signup"><button className={style.joinnow}>Join Now</button></Link>
              <Link to="/loginpage"><button className={style.signin}>SignIN</button></Link>
          </div>
       </div>
       <MovieList />
  </div>
  )
}
