import React from "react";
import { Link } from "react-router-dom";

interface FooterProps {
	currentYear?: number;
}

/**
 * Footer component with navigation and copyright information.
 *
 * @component
 * @author Michael Adesina <uniquecyborg@gmail.com>
 * @version 1.0.0
 * @since 1.0.0
 */
const Footer: React.FC<FooterProps> = ({
	currentYear = new Date().getFullYear(),
}) => {
	return (
		<footer className="border-top border-primary bg-dark text-white py-4 mt-auto">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-md-6">
						<nav>
							<ul className="nav">
								<li className="nav-item">
									<Link to="/" className="nav-link link-light">
										Home
									</Link>
								</li>
								<li className="nav-item">
									<a href="/#details" className="nav-link link-light">
										Details
									</a>
								</li>
								<li className="nav-item">
									<Link to="/contact" className="nav-link link-light">
										Contact
									</Link>
								</li>
							</ul>
						</nav>
					</div>
					<div className="col-md-6 text-md-end text-center">
						<p>Copyright &copy; Blog Mastery {currentYear}</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
