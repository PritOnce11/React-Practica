import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
    return (
        <>
          <nav className="navbar navbar-expand-lg text-black bg-white">
            <div className="container-fluid">
              <a className="navbar-brand" href="/">N.E.G.O</a>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <NavLink
                className="nav-link active"
                to="/">
                Home
              </NavLink>
              <NavLink
                className="nav-link active"
                to="/rickMorty">
                Rick And Morty
              </NavLink>
              <NavLink
                className="nav-link active"
                to="/rickMortyAll">
                Rick And Morty All
              </NavLink>
              <NavLink
                className="nav-link active"
                to="/form">
                Form Styled
              </NavLink>
              <NavLink
                className="nav-link active"
                to="/hotels">
                  Hoteles
              </NavLink>
                </ul>
              </div>
            </div>
          </nav>
        </>
      )
}
