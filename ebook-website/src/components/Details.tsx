import React, { useState } from "react";
import ListItems from "./ListItems";

/**
 * Interface defining the structure of list item data.
 * @interface ListData
 * @property {string} title - The title of the list item.
 * @property {string} text - The description text of the list item.
 */
interface ListData {
	title: string;
	text: string;
}

/**
 * Details component displaying information about the ebook and a modal.
 * This component renders a section with a title, description, a list of features, an image, and a modal that opens on button click.
 * @component
 * @author Michael Adesina <uniquecyborg@gmail.com>
 * @returns {JSX.Element} The Details component.
 */
const Details: React.FC = () => {
	/**
	 * State variable to control the modal's visibility.
	 * @type {boolean}
	 */
	const [showModal, setShowModal] = useState(false);

	/**
	 * Array containing the data for the list of features.
	 * @type {ListData[]}
	 */
	const listData: ListData[] = [
		{
			title: "Unleash Your Creativity",
			text: "Our ebook empowers you to unleash your creativity and express your unique voice through your blog.",
		},
		{
			title: "Maximize Your Reach",
			text: "Learn how to optimize your blog for search engines",
		},
		{
			title: "Monetization Strategies",
			text: "Discover various monetization strategies, such as sponsored content & affiliate marketing.",
		},
	];

	/**
	 * Function to toggle the modal's visibility.
	 * @function toggleModal
	 * @returns {void}
	 */
	const toggleModal = () => setShowModal(!showModal);

	return (
		<>
			<section id="details" className="details my-5">
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<div className="text-container d-flex flex-column justify-content-center h-100">
								<h2 className="display-6">Unlock Your Blogging Potential</h2>
								<p>
									Are you ready to unleash your true blogging potential? Our
									ebook, "Blog Mastery," provides you with the tools and
									knowledge to take your blog to the next level.
								</p>
								<ul className="list-group list-group-flush lh-lg">
									{listData.map((item, index) => (
										<ListItems key={index} {...item} />
									))}
								</ul>
								<a
									className="btn btn-primary text-white mt-4 align-self-start"
									data-bs-toggle="modal"
									data-bs-target="#modal1"
									onClick={toggleModal}
								>
									Get Your Copy Now
								</a>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="image-container p-5">
								<img
									src="images/description.png"
									alt="Book description"
									title="Book description"
									className="img-fluid"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* modal */}
			<div id="modal1" className={`modal fade ${showModal ? "show" : ""}`}>
				<div className="modal-dialog modal-lg mt-7">
					<div className="modal-content p-5">
						<div className="row">
							<div className="col-lg-6">
								<div className="image-container">
									<img
										src="images/description.png"
										alt="Book description"
										title="Book description"
										className="img-fluid"
									/>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="text-container">
									<h2 className="display-6">Unlock Your Blogging Potential</h2>
									<p>
										Are you ready to unleash your true blogging potential? Our
										ebook, "Blog Mastery," provides you with the tools and
										knowledge to take your blog to the next level.
									</p>
									<ul className="list-group list-group-flush lh-lg">
										{listData.map((item, index) => (
											<ListItems key={index} {...item} />
										))}
									</ul>
									<a href="" className="btn btn-primary text-white">
										Free Download
									</a>
									<button className="btn btn-light" data-bs-dismiss="modal">
										Close
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Details;
