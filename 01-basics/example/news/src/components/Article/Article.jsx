import React from 'react';
import styles from './Article.module.css';

const Article = () => {
	return (
		<>
			<div className={styles.article_image}></div>

			<h2 className={styles.article_headline}>
				The Bright Future of Web 3.0?
			</h2>

			<p className={styles.article_text}>
				We dive into the next evolution of the web that claims to put
				the power of the platforms back into the hands of the people.
				But is it really fulfilling its promise?
			</p>
			<button className={styles.article_button}>READ MORE</button>
		</>
	);
};

export default Article;
