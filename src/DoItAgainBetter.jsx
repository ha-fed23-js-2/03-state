import {useState} from 'react'

const DoItAgainBetter = () => {
	const [count, setCount] = useState(0)
	const handleClick = () => setCount(count + 1)

	// Conditional rendering, version 1
	let p = <p> Du har inte klickat några gånger. </p>
	if( count > 0 ) {
		p = <p> Du har klickat {count} gånger. </p>
	}
	// Version 2 (conditional operator, "?")
	p = <p> Du har {count === 0 ? 'inte klickat några' : 'klickat ' + count} gånger. </p>
	// console.log('p? ', p)
	return (
		<div>
			<button onClick={handleClick}> Klicka här </button>
			{p}
			{/* version 3, direkt i JSX */}
			<p> Du har {count === 0 ? 'inte klickat några' : 'klickat ' + count} gånger. </p>
		</div>
	)

	

}

export default DoItAgainBetter
