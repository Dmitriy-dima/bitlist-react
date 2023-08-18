import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';
import styles from '../../styles/Header.module.css';
import { useMediaQuery } from 'react-responsive';

import { ROUTES } from '../../utils/routes';

import LOGO from '../../images/logo.svg';
import Line from '../../images/line.svg';


const Header = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 769px) and (max-width: 1024px)' });

  return (
    <div className={styles.header}>
      <div className={styles.headerWrapper}>
        <div className={styles.logo}>
          <Link to={ROUTES.HOME}>
            <img src={LOGO} alt="stuff" />
          </Link>
        </div>
        <img src={Line} alt="line" className={`${styles.verticalLine} ${styles.verticalLineShiftLeft}`} />
        <div className={styles.info}>
          <div className={styles.user}>
            <form className={styles.form} >
              <div className={styles.icon}>
                <svg className="icon">
                  <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#search`} />
                </svg>
              </div>
              <div className={styles.input}>
                <input
                  type="Search"
                  name="search"
                  placeholder="Search"
                  autoComplete="off"
                  onChange={() => {}}
                  value=""
                />
              </div>
            </form>
          </div>
            <div className={styles.links}>
              <Link className={styles.link} to={ROUTES.TRADE} >Trade</Link>
              <Link className={styles.link} to={ROUTES.P2P} >P2P</Link>
              <Link className={styles.link} to={ROUTES.PARTNERS} >Partners</Link>
              <Link className={styles.link} to={ROUTES.MINING} >Mining</Link>
              <Link className={styles.link} to={ROUTES.ACADEMY} >Academy</Link>
              <img src={Line} alt="line" className={`${styles.verticalLine} ${styles.verticalLineShiftRight}`}  />
              <button className={styles.btns}>Register</button>
              <button className={styles.btns}>Log in</button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Header;
