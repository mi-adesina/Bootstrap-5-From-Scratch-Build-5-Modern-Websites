import React from "react";

/**
 * Statements component displaying a featured statement or message.
 * This component renders a section with a heading and a paragraph of text, typically used for highlighting a key message or call to action.
 * @component
 * @author Michael Adesina <uniquecyborg@gmail.com>
 * @returns {JSX.Element} The Statements component.
 */
const Statements: React.FC = () => {
	return (
		<section className="statement mb-5">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="text-container bg-light p-5 rounded-5">
							<h2>Master the Art of Blogging Excellence</h2>
							<p>
								Transform your blog from a mere hobby to a thriving online
								business with our ebook, "Blog Mastery: Monetize Your Passion."
								This invaluable resource is your roadmap to turning your blog
								into a profitable venture. Learn how to monetize your content
								through various strategies such as sponsored posts, affiliate
								marketing, and product creation. Gain insights into building a
								strong brand, attracting lucrative partnerships, and maximizing
								your earning potential. Take the leap and unlock the financial
								rewards of your blogging journey.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Statements;
