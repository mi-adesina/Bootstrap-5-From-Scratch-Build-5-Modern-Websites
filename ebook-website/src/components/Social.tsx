import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebook,
	faXTwitter,
	faInstagram,
	faLinkedin,
	faPinterest,
	IconDefinition,
} from "@fortawesome/free-brands-svg-icons";

interface SocialPlatform {
	name: string;
	href: string;
	icon: IconDefinition;
}

const socialPlatforms: SocialPlatform[] = [
	{
		name: "Facebook",
		href: "https://www.facebook.com/",
		icon: faFacebook,
	},
	{
		name: "X",
		href: "https://twitter.com/",
		icon: faXTwitter,
	},
	{
		name: "Instagram",
		href: "https://www.instagram.com/",
		icon: faInstagram,
	},
	{
		name: "LinkedIn",
		href: "https://www.linkedin.com/",
		icon: faLinkedin,
	},
	{
		name: "Pinterest",
		href: "https://www.pinterest.com/",
		icon: faPinterest,
	},
];

/**
 * Social component displaying social media links.
 * @component
 * @author Michael Adesina <uniquecyborg@gmail.com>
 * @version 1.0.0 
 * @returns {JSX.Element} The Social component.
 */
const Social: React.FC = () => {
	return (
		<section className="social text-bg-dark py-6 overflow-hidden">
			<div className="container">
				<div className="row">
					<div className="col-md-6 offset-md-3 text-center">
						<p className="lead">
							Stay connected and join our vibrant community. For any inquiries
							or assistance, feel free to reach out to us.
						</p>
						<nav aria-label="Social Media Links">
							<ul className="social-icons d-flex justify-content-center gap-4 list-unstyled">
								{socialPlatforms.map((platform) => (
									<PlatformLi key={platform.name} {...platform} />
								))}
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</section>
	);
};

/**
 * Component for rendering a single social media platform link.
 *
 * @component
 * @author Michael Adesina <uniquecyborg@gmail.com>
 * @version 1.0.0 
 */
const PlatformLi: React.FC<SocialPlatform> = ({ name, href, icon }) => {
	return (
		<li>
			<a
				href={href}
				aria-label={name}
				target="_blank"
				rel="noopener noreferrer"
			>
				<FontAwesomeIcon icon={icon} size="2x" />
			</a>
		</li>
	);
};

export default Social;
