import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./components/Navigation";
import Header from "./components/Header";

const App = () => {
	return (
		<>
			<Router>
				<Navigation />
				<Header />
			</Router>
		</>
	);
};

export default App;
