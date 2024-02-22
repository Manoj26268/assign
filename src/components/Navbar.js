import React, { useState } from 'react';
import styles from "../css_modules/Navbar.module.css";

function Navbar() {
  const [isNavVisible, setIsNavVisible] = useState(false);

  return (
    <nav className={styles.nav}>
      <img src="./images/bluetick-consultants.png" alt="Bluetick Consultants" />
      <button className={styles.hamburgerMenu} onClick={() => setIsNavVisible(!isNavVisible)}>
        <img src="./images/square.png" alt="Hamburger Menu" />
      </button>
      <ul className={`${styles.nav_links} ${isNavVisible ? styles.show : ''}`}>
        <li><a href="#hero">Home</a></li>
        <li><a href="#offer">Offerings</a></li>
        <li><a href="#blogs">Blogs</a></li>
        <li><a href="#connect">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
