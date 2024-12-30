import React, { FormEvent } from 'react';

/**
 * ForHomeComponent displays the hero section content specifically for the home page.
 * It includes an image, welcome text, a brief description, and a form for users to
 * submit their email address for a free download. This component is intended to be
 * rendered conditionally within a parent component (e.g., Header) when the user is
 * on the home page.
 *
 * @returns {JSX.Element} The ForHomeComponent JSX element.
 * @author Michael Adesina <uniquecyborg@gmail.com>
 *
 * @example
 * // Example usage within a parent component (e.g., Header):
 * const MyParentComponent: React.FC = () => {
 *   const isHomePage = true; // Condition for rendering Home component
 *   return (
 *     <Header
 *       isHome={isHomePage}
 *       ForHomeComponent={<ForHomeComponent />}
 *       ForContactConponent={<ForContactConponent />}
 *     />
 *   );
 * };
 */
const ForHomeComponent: React.FC = () => {
    /**
     * Handles form submission.
     * Prevents default form submission behavior and logs a message to the console.
     * In a real application, this would likely send the form data to a server.
     *
     * @param {FormEvent<HTMLFormElement>} e The form submit event.
     */
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form Submitted");
        // In a real application, you would handle form submission here,
        // e.g., using fetch or Axios to send data to a server.
    };

    return (
        <>
            <div className="col-md-6">
                <div className="image-container mb-5 px-4">
                    <img
                        src="images/header-ebook.png"
                        alt="Ebook Image"
                        title="Ebook front page"
                        className="img-fluid"
                        loading="lazy"
                    />
                </div>
            </div>
            <div className="col-md-6">
                <div className="text-container p-4 d-flex flex-column justify-content-center h-100 mb-5">
                    <h1 className="display-3 fw-bold">Welcome to Blog Mastery</h1>
                    <p className="lead">
                        Are you ready to take your blogging journey to new heights? Blog
                        Mastery is your ultimate guide to creating and managing a successful
                        blog that captivates your audience and drives engagement.
                    </p>

                    <div className="form-container text-center">
                        <form onSubmit={handleSubmit}>
                            <div className="my-4">
                                <input
                                    type="email"
                                    className="form-control form-control-lg rounded-5"
                                    placeholder="Email Address"
                                    aria-label="Enter your email"
                                    required
                                />
                            </div>
                            <div className="d-grid">
                                <button
                                    className="btn btn-primary btn-lg text-white"
                                    type="submit"
                                >
                                    Free Download
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ForHomeComponent;