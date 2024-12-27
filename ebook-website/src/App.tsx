import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Icons from "./components/Icons";

/**
 * Main application component.
 * This component sets up the routing and renders the main layout elements:
 * Navigation, Header, and Icons.
 *
 * @returns {JSX.Element} The App component.
 */
const App: React.FC = () => {
    return (
        <> {/* React.Fragment shorthand */}
            <Router>
                <Navigation />
                <Header />
                <Icons />
            </Router>
        </>
    );
};

export default App;