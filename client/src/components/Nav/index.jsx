import auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {
    function showNavigation() {
        if (auth.loggedIn()) {
          return (
            <ul className="flex-column">
              <li className="mx-1">
                {/* this is not using the Link component to logout or user and then refresh the application to the start */}
                <a href="/" onClick={() => auth.logout()}>
                  Logout
                </a>
              </li>
            </ul>
          );
        } else {
          return (
            <ul className="flex-column">
              <li className="mx-1">
                <Link to="/signup">
                  Signup
                </Link>
              </li>
              <li className="mx-1">
                <Link to="/login">
                  Login
                </Link>
              </li>
            </ul>
          );
        }
      }
    
      return (
        <header className="flex-column px-1">

    
          <nav>
            {showNavigation()}
          </nav>
        </header>
      );
};

export default Nav;