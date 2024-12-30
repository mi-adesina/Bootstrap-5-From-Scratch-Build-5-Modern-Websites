import React, { useState } from "react";

/**
 * @file ContactForm.tsx
 * @author Michael Adesina <uniquecyborg@gmail.com>
 * @brief This component renders a contact form and handles form submission using Formspree.
 */

interface FormData {
	name: string;
	email: string;
	message: string;
}

/**
 * @brief ContactForm component.
 * @description A functional component that renders a contact form with name, email, and message fields.
 * It handles form submission to Formspree and provides feedback to the user.
 * @returns {JSX.Element} The ContactForm component.
 */
const ContactForm: React.FC = () => {
	/**
	 * @brief State for form data.
	 */
	const [formData, setFormData] = useState<FormData>({
		name: "",
		email: "",
		message: "",
	});

	/**
	 * @brief State for form submission status.
	 */
	const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

	/**
	 * @brief State for submission error message.
	 */
	const [submissionError, setSubmissionError] = useState<string | null>(null);

	/**
	 * @brief Handles changes in form input fields.
	 * @param {React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>} e - The change event.
	 */
	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	/**
	 * @brief Handles form submission.
	 * @param {React.FormEvent} e - The form submit event.
	 * @async
	 */
	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setFormSubmitted(true);
		setSubmissionError(null);

		try {
			const response = await fetch("https://formspree.io/f/mrgvnzvq", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: JSON.stringify(formData),
			});

			if (!response.ok) {
				const errorData = await response.json();
				throw new Error(
					errorData?.error || `HTTP error! status: ${response.status}`
				);
			}
			setFormData({ name: "", email: "", message: "" });
			alert("Message sent successfully!");
		} catch (error: any) {
			console.error("Form submission error:", error);
			setSubmissionError(
				error.message || "An error occurred during submission."
			);
			alert("Could not send message, please try again later.");
		} finally {
			setFormSubmitted(false);
		}
	};

	return (
		<section className="contact bg-light pb-4">
			<div className="container">
				<div className="row">
					<div className="col-12">
						{submissionError && (
							<div className="alert alert-danger" role="alert">
								{submissionError}
							</div>
						)}
						<form onSubmit={handleSubmit}>
							<div className="mb-3">
								<input
									type="text"
									className="form-control form-control-lg"
									name="name"
									placeholder="Name"
									value={formData.name}
									onChange={handleChange}
									required
								/>
							</div>
							<div className="mb-3">
								<input
									type="email"
									className="form-control form-control-lg"
									name="email"
									placeholder="Email"
									value={formData.email}
									onChange={handleChange}
									required
								/>
							</div>
							<div className="mb-3">
								<textarea
									className="form-control form-control-lg"
									name="message"
									rows={6}
									placeholder="Message"
									value={formData.message}
									onChange={handleChange}
									required
								/>
							</div>
							<div className="d-grid">
								<button
									type="submit"
									className="btn btn-primary text-white mt-3"
									disabled={formSubmitted}
								>
									{formSubmitted ? "Submitting..." : "Submit"}
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactForm;
