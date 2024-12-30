import React from "react";
import Header from "./Header";
import Icons from "./Icons";
import Details from "./Details";
import Statements from "./Statements";
import Details2 from "./Details2";
import Testimonials from "./Testimonials";
import Download from "./Download";
import Social from "./Social";

const Home: React.FC = () => {
	return (
		<>
			<Header isHome={true}/>
			<Icons />
			<Details />
			<Statements />
			<Details2 />
			<Testimonials />
			<Download />
			<Social />
		</>
	);
};

export default Home;
