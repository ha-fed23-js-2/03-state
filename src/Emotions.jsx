import { useState } from 'react'

const Emotion = () => {
	const [text, setText] = useState('I am happy')

	const handleHappyClick = () => { setText('I am happy') }
	function handleExcitedClick() { setText('I am excited') }

	return (
		<section>
			<button onClick={handleHappyClick}> Happy </button>
			<button onClick={handleExcitedClick}> Excited </button>
			<p> {text} </p>
		</section>
	)
}

export default Emotion
