import React from "react";

/**
 * @brief ContactMap component.
 * @author Michael Adesina <uniquecyborg@gmail.com>
 * @description A functional component that displays location information and a map.
 * @returns {JSX.Element} The ContactMap component.
 */
const ContactMap: React.FC = () => {
	return (
		<section className="location my-5">
			<div className="container">
				<div className="row">
					<div className="col-10 offset-1">
						<h3>Our Location</h3>
						<p className="mb-4">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
							deserunt recusandae iure officiis quia saepe at velit ad eum
							tenetur magnam, nihil voluptate sit totam ut reiciendis iusto
							harum doloribus.
						</p>
						<div className="map">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1241.5303553091994!2d-0.14076024298621118!3d51.51210217963597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604d502268421%3A0x6a7d62889992f993!2sRegent+St%2C+Soho%2C+London+W1B+5TH%2C+UK!5e0!3m2!1sen!2sro!4v1476174541049"
								allowFullScreen
							></iframe>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactMap;
