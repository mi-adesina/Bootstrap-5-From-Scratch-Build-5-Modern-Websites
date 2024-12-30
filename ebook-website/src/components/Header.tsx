import React from "react";
import ForContactComponent from "./ForContactComponent";
import ForHomeComponent from "./ForHomeComponent";

interface HeaderProps {
	isHome: boolean;
  }

/**
 * Header component for the website's main landing section.
 * This component displays a hero section with an image, descriptive text,
 * and a form for users to submit their email address (on the home page).
 *
 * @prop {boolean} isHome  - A flag indicating whether the component is being rendered on the home page.
 *                             If true, displays the `ForHomeComponent`, otherwise displays the `ForContactConpoment`.
 * @prop {React.ComponentType} ForHomeComponent  - React component to be displayed on the home page.
 * @prop {React.ComponentType} ForContactConpoment  - React component to be displayed on other pages.
 *
 * @author Michael Adesina <uniquecyborg@gmail.com>
 * @version 1.0.0
 * @returns {JSX.Element} The Header component..
 */
const Header: React.FC<HeaderProps> = ({ isHome }) => {
	const isHomeRendering: boolean = isHome;

	return (
		<header className="header">
			<div className="hero text-white pt-7">
				<div className="container-xl">
					<div className="row">
						{isHomeRendering ? <ForHomeComponent /> : <ForContactComponent />}
					</div>
				</div>
			</div>
			<svg
				className="frame-decoration"
				data-name="Layer 2"
				xmlns="http://www.w3.org/2000/svg"
				preserveAspectRatio="none"
				viewBox="0 0 1920 192.275"
			>
				<title>frame-decoration</title>
				<path
					className="cls-1"
					d="M0,158.755s63.9,52.163,179.472,50.736c121.494-1.5,185.839-49.738,305.984-49.733,109.21,0,181.491,51.733,300.537,50.233,123.941-1.562,225.214-50.126,390.43-50.374,123.821-.185,353.982,58.374,458.976,56.373,217.907-4.153,284.6-57.236,284.6-57.236V351.03H0V158.755Z"
					transform="translate(0 -158.755)"
					fill="#f3f6f9"
				/>
			</svg>
		</header>
	);
};

export default Header;
