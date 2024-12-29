import React from "react";

/**
 * Interface defining the structure of testimonial data.
 * @interface TestimonialData
 * @property {string} imgSrc - The URL of the testimonial's image.
 * @property {string} text - The testimonial text.
 * @property {string} writer - The name and location of the testimonial writer.
 */
interface TestimonialData {
	imgSrc: string;
	text: string;
	writer: string;
}

/**
 * Testimonials component displaying a section of user testimonials.
 * This component renders a series of testimonial cards, each with an image, quote, and writer information.
 * @component
 * @author Michael Adesina <uniquecyborg@gmail.com>
 * @returns {JSX.Element} The Testimonials component.
 */
const Testimonials: React.FC = () => {
	/**
	 * Array containing the data for each testimonial.
	 * @type {TestimonialData[]}
	 */
	const testimonialData: TestimonialData[] = [
		{
			imgSrc: "https://randomuser.me/api/portraits/men/32.jpg",
			text: `"This ebook completely transformed my blogging journey. The practical strategies and valuable insights helped me take my blog to new heights. I highly recommend it!"`,
			writer: "Kenny Smith - Portland, ME",
		},
		{
			imgSrc: "https://randomuser.me/api/portraits/women/32.jpg",
			text: `"I'm so grateful for this ebook! It provided me with guidance and inspiration I needed to create engaging content and build a loyal readership. It's a game-changer!"`,
			writer: "Laurie Mitchell - Miami, FL",
		},
		{
			imgSrc: "https://randomuser.me/api/portraits/men/31.jpg",
			text: `"I can't recommend this ebook enough. It's a treasure of blogging wisdom. It helped me unlock my creativity, connect with my audience, and achieve remarkable results."`,
			writer: "Henry White - Boston, MA",
		},
	];

	return (
		<section className="testimonials mb-8">
			<div className="container">
				<div className="row">
					{testimonialData.map((item, index) => (
						<Testimony key={index} {...item} />
					))}
				</div>
			</div>
		</section>
	);
};

/**
 * Interface defining the props for the Testimony component.
 * @interface TestimonyProps
 * @property {string} imgSrc - The URL of the testimonial's image.
 * @property {string} text - The testimonial text.
 * @property {string} writer - The name and location of the testimonial writer.
 */
interface TestimonyProps {
	imgSrc: string;
	text: string;
	writer: string;
}

/**
 * Testimony component displaying a single user testimonial.
 * This component renders a single testimonial card with an image, quote, and writer information.
 * @component
 * @author Michael Adesina <uniquecyborg@gmail.com>
 * @param {TestimonyProps} props - The component props.
 * @returns {JSX.Element} The Testimony component.
 */
const Testimony: React.FC<TestimonyProps> = ({ imgSrc, text, writer }) => {
	return (
		<div className="col-md-4 text-center">
			<img
				src={imgSrc}
				alt={`Testimonial from ${writer}`}
				title={`Testimonial from ${writer}`}
				className="rounded-circle mb-3"
			/>
			<p className="lead fst-italic">{text}</p>
			<p className="fw-bold">{writer}</p>
		</div>
	);
};

export default Testimonials;
