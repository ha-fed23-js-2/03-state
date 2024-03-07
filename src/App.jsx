import { useState } from 'react'
import './App.css'
import Emotion from './Emotions.jsx'

function App() {
	const [count, setCount] = useState(0)
	// console.log('Renderar App-komponenten. count=', count);

	const handleClick = () => {
		// console.log('Du klickade +1');
		setCount(count + 1)
		// Snälla React, uppdatera count, så snart du hinner med
		// console.log('Count är:', count);
		// count har inte hunnit ändras
	}

	return (
		<main>
			<h1> En React webbapp </h1>

			<section>
				<p> Antal klick: {count} </p>
				<button onClick={handleClick}> +1 </button>
				<button onClick={() => setCount(count + 1)}> +1 (alternativ) </button>
			</section>

			<Emotion />
		</main>
	)
}

export default App
