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
 * Details2 component displaying information about the ebook and a modal.
 * This component renders a section with a title, description, a list of features, an image, and a modal that opens on button click.
 * @component
 * @author Michael Adesina <uniquecyborg@gmail.com>
 * @returns {JSX.Element} The Details2 component.
 */
const Details2: React.FC = () => {
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
			title: "Embrace Your Unique Voice",
			text: "earn how to harness the power of your unique voice.",
		},
		{
			title: "Spark Creativity",
			text: "Explore techniques to spark creativity and overcome writer's block.",
		},
		{
			title: "Engage Your Readers",
			text: "Discover strategies for creating content that engages your readers on a deeper level.",
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
			<section className="details my-5">
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<div className="image-container p-5">
								<img
									src="images/author.png"
									alt="Author"
									title="Author"
									className="img-fluid"
								/>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="text-container d-flex flex-column justify-content-center h-100">
								<h2 className="display-6">Craft Remarkable Content</h2>
								<p>
									Discover techniques for effective storytelling, engaging
									visuals, and compelling calls-to-action. Unlock the secrets of
									creating a consistent and authentic brand voice that sets you
									apart from the competition.
								</p>
								<ul className="list-group list-group-flush lh-lg">
									{listData.map((item, index) => (
										<ListItems key={index} {...item} />
									))}
								</ul>
								<a
									className="btn btn-primary text-white mt-4 align-self-start"
									data-bs-toggle="modal"
									data-bs-target="#modal2"
									onClick={toggleModal}
								>
									Learn More
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* modal */}
			<div id="modal2" className={`modal fade ${showModal ? "show" : ""}`}>
				<div className="modal-dialog modal-lg mt-7">
					<div className="modal-content p-5">
						<div className="row">
							<div className="col-lg-6">
								<div className="text-container">
									<h2 className="display-6">Craft Remarkable Content</h2>
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
							<div className="col-lg-6">
								<div className="image-container">
									<img
										src="images/author.png"
										alt="Author"
										title="Author"
										className="img-fluid"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Details2;
