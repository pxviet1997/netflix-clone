import { useEffect, useState } from 'react';
import './NavBar.css';

const NavBar = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      }
      else {
        setShow(false);
      }
    })
    return () => {
      window.removeEventListener("scroll");
    }
  }, []);

  return (
    <div className={`nav-bar ${show && "nav-bar-black"}`}>
      <img
        className="nav-bar-logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      />
      <img
        className="nav-bar-avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Netflix Avatar"
      />
    </div >
  );
}

export default NavBar;