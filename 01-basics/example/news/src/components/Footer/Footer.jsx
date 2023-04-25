import React from 'react';
import styles from './Footer.module.css';

const footerArticles = [
	{
		image: './src/images/image-retro-pcs.jpg',
		index: '01',
		heading: 'Reviving Retro PCs',
		paragraph: 'What happens when old PCs are given modern upgrades?',
	},
	{
		image: './src/images/image-top-laptops.jpg',
		index: '02',
		heading: 'Top 10 Laptops of 2022',
		paragraph: 'Our best picks for various needs and budgets.',
	},
	{
		image: './src/images/image-gaming-growth.jpg',
		index: '03',
		heading: 'The Growth of Gaming',
		paragraph: 'How the pandemic has sparked fresh opportunieties.',
	},
];

const Footer = () => {
	return (
		<>
			{footerArticles.map((art) => {
				return (
					<div className={styles.footer_card}>
						<img className={styles.footer_img} src={art.image} />
						<div className={styles.footer_div}>
							<span className={styles.footer_span}>
								{art.index}
							</span>
							<h5 className={styles.footer_heading}>
								{art.heading}
							</h5>

							<p className={styles.footer_text}>
								{art.paragraph}
							</p>
						</div>
					</div>
				);
			})}
		</>
	);
};

export default Footer;
