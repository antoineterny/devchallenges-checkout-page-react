import React, { useState } from "react"

function Button(props) {
	const handleClick = () => props.onClickFunction(props.increment)
	return (
		<button onClick={handleClick} className={props.increment > 0 ? "plus" : "minus"}>
			<i className="material-icons">{props.increment > 0 ? "add" : "remove"}</i>
		</button>
	)
}

function Display(props) {
	return <span>{props.message}</span>
}

function CounterComponent() {
	const [counter, setCounter] = useState(0)
	const incrementCounter = incrementValue => {
		if (counter + incrementValue < 0) return
		setCounter(counter + incrementValue)
	}
	return (
		<div>
			<div className="quantity">
				<Button id="minus" onClickFunction={incrementCounter} increment={-1} />
				<Display message={counter} />
				<Button id="plus" onClickFunction={incrementCounter} increment={1} />
			</div>
		</div>
	)
}

export default CounterComponent
