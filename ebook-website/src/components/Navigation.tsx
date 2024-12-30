import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

/**
 * Navigation component for the website.
 * This component renders the main navigation bar, including the logo,
 * navigation links, and a responsive toggle for smaller screens.
 *
 * @author Michael Adesina <uniquecyborg@gmail.com>
 * @version 1.0.0
 * @returns {JSX.Element} The Navigation component.
 */
const Navigation: React.FC = () => {
	const [isScrolled, setIsScrolled] = useState<boolean>(false);
	const navbarRef = useRef<HTMLElement | null>(null);

	useEffect(() => {
		const handleScroll = () => {
			if (!navbarRef.current) return;

			const currentScroll = window.scrollY;
			setIsScrolled(currentScroll > 50);

			if (isScrolled) {
				// Use state to toggle class
				navbarRef.current.classList.add("bg-dark");
				navbarRef.current.classList.add("navbar-sticky");
			} else {
				navbarRef.current.classList.remove("bg-dark");
				navbarRef.current.classList.remove("navbar-sticky");
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [isScrolled]);

	return (
		<nav
			className="navbar navbar-expand-lg fixed-top navbar-dark"
			ref={navbarRef}
		>
			<div className="container">
				<a href="/" className="navbar-brand">
					<img
						src="/images/logo.png"
						alt="Website Logo"
						title="Homepage"
						style={{ width: 225 }}
					/>
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNavDropdown"
					aria-controls="navbarNavDropdown"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNavDropdown">
					<ul className="navbar-nav ms-auto">
						<li className="nav-item">
							<Link to="/" className="nav-link fw-semi-bold">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<a href="/#details" className="nav-link fw-semi-bold">
								Details
							</a>
						</li>
						<li className="nav-item">
							<Link
								to="/contact"
								className="nav-link btn btn-outline-light fw-semibold px-4 mx-4"
							>
								Contact
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navigation;
