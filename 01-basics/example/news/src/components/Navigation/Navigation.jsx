import React from 'react';
import styles from './Navigation.module.css';

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
				<img src="./src/images/logo.svg" />
			</div>
			<ul className={styles.link_list}>
				{links.map((link, index) => {
					return (
						<li key={index}>
							<a className={styles.link} href={link.linkUrl}>
								{link.linkText}
							</a>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Navigation;
