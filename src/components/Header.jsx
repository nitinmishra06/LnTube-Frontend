import './Style/Header.css'
import { Link } from 'react-router-dom';
export function Header(){
    return(
        <>
      <header className="header">

      <Link to="/" className="logo">

        <span className="logo-icon">
          <i className="fa-solid fa-graduation-cap"></i>
        </span>

        <h1>LearnTube</h1>

      </Link>

    <nav class="nav-links">
         <Link to="/learn">Learn</Link>
        <Link to="/notes">Notes</Link>
        <Link to="/profile">Profile</Link>
    </nav>

    <div class="menu-btn">
        <i class="fa-solid fa-bars"></i>
    </div>

</header>
        </>

    );

}