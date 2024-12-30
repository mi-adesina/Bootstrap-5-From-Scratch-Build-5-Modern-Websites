import React from "react";
import Navigation from "./Navigation";
import Header from "./Header";
import ContactForm from "./ContactForm";
import ContactMap from "./ContactMap";
import Social from "./Social";

/**
 * The Contact component represents the contact page of the application.
 * It renders the navigation, header, contact form, map, and social links.
 *
 * @component
 * @author Michael Adesina <uniquecyborg@gmail.com>
 */
const Contact: React.FC = () => {
    return (
        <>
            {/*
             * The Navigation component for the contact page.
             *
             * @component
             */}
            <Navigation />

            {/*
             * The Header component for the contact page.
             * The `isHome` prop is set to `false` to indicate that this is not the home page.
             *
             * @component
             * @prop {boolean} isHome - Indicates whether the header is displayed on the home page.
             */}
            <Header isHome={false} />

            {/*
             * The ContactForm component for handling user contact submissions.
             *
             * @component
             */}
            <ContactForm />

            {/*
             * The ContactMap component displaying a map of the contact location.
             *
             * @component
             */}
            <ContactMap />

            {/*
             * The Social component displaying social media links.
             *
             * @component
             */}
            <Social />
        </>
    );
};

export default Contact;