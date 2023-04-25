import './App.css';
import React, { useState } from 'react';

function App() {
	const [counter, setCounter] = useState(0);

	const [notes, setNotes] = useState([]);

	const increaseValue = () => setCounter(counter + 1);
	const decreaseValue = () => setCounter(counter - 1);

	const handleSubmit = (e) => {
		e.preventDefault(e);

		console.log('e', e.target.note.value);
	};

	return (
		<>
			<div>
				<button onClick={increaseValue}>+</button>
				<input type="text" value={counter} />
				<button onClick={decreaseValue}>-</button>
			</div>

			<form onSubmit={handleSubmit}>
				<input type="text" name="note" />
				<button type="submit">Update state</button>
			</form>
		</>
	);
}

export default App;
