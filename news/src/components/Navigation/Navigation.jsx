import React from 'react';
import NavbarLogo from './logo.svg';
import styles from './Navigation.module.css';
import LinkImage from '../Images/LinkImage';

const links = [
  { linkUrl: '#', linkText: 'Home' },
  { linkUrl: '#', linkText: 'New' },
  { linkUrl: '#', linkText: 'Popular' },
  { linkUrl: '#', linkText: 'Trending' },
  { linkUrl: '#', linkText: 'Categories' },
];

const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <div className={styles.logo}>
        <LinkImage srcImage={NavbarLogo} imgAlt={'logo'}></LinkImage>
      </div>
      <ul className={styles.link_list}>
        {links.map((link, index) => {
          return (
            <li key={index}>
              <a href={link.linkUrl}>{link.linkText}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navigation;
