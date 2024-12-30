import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Home from "./components/Home";
import ScrollToTop from "./components/ScrollToTop";

const App: React.FC = () => {
	return (
		<>
			<Router>
				<Navigation /> 
                <ScrollToTop />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
				<Footer />
			</Router>
		</>
	);
};

export default App;
