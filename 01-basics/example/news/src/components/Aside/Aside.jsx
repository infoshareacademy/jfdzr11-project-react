import React from 'react';
import styles from './Aside.module.css';

const asideArticles = [
	{
		heading: 'Hydrogen VS Electric Cars',
		paragraph: 'Will hydrogen-fueled cars ever catch up to EVs?',
	},
	{
		heading: 'The Downsides of AI Artistry',
		paragraph:
			'What are the possible adverse effects of on-demand AI image generation?',
	},
	{
		heading: 'Is VC Funding Drying Up?',
		paragraph:
			'Privite funding by VC firms is down 50% YOY. We take a look at what that means.',
	},
];

const Aside = () => {
	return (
		<>
			<h3 className={styles.aside_header}>New</h3>

			{asideArticles.map((article) => {
				return (
					<div className={styles.aside_container}>
						<h4 className={styles.aside_h}>{article.heading}</h4>
						<p className={styles.aside_p}>{article.paragraph}</p>
					</div>
				);
			})}
		</>
	);
};

export default Aside;
