import Button from "./components/Button";
import { useState } from "react";
import Card from "./components/Card";
import axios from "axios";
function App() {
	const [inputValue, setinputValue] = useState("");
	const [dataArray, setDataArray] = useState([]);
	const [apiData, setApiData] = useState([]);

	const inputHandler = (e) => {
		setinputValue(e.target.value);
	};

	const addItemHandler = () => {
		setDataArray((prev) => {
			return [...prev, inputValue];
		});
		setinputValue("");
	};

	//const axios = require('axios'); // legacy way

	// Make a request for a user with a given ID
	axios
		.get("https://jsonplaceholder.typicode.com/users")
		.then(function (response) {
			// handle success
			setApiData(response.data);
		})
		.catch(function (error) {
			// handle error
			console.log(error);
		});

	return (
		<div className="App">
			<input value={inputValue} onChange={inputHandler} />
			<Button clickHandler={addItemHandler}>Add item</Button>
			{dataArray.map((elem, idx) => {
				return <Card key={idx} passedItem={elem} />;
			})}
			{apiData.map((elem) => {
				return (
					<p key={elem.id}>
						{elem.name} , {elem.phone}
					</p>
				);
			})}
		</div>
	);
}

export default App;
