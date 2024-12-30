import React from "react";
import Navigation from "./Navigation";
import Header from "./Header";
import ContactForm from "./ContactForm";
import ContactMap from "./ContactMap";
import Social from "./Social";

const Contact: React.FC = () => {
	return (
		<>
			<Navigation />
			<Header isHome={false} />
            <ContactForm />
            <ContactMap />
            <Social />
		</>
	);
};

export default Contact;
