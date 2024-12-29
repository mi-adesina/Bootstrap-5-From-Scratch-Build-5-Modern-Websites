import React from "react";

/**
 * Download component displaying a section for ebook download.
 * This component renders a section with an image of the ebook, a title, a brief description, and a form for users to enter their email and download the ebook.
 * @component
 * @author Michael Adesina <uniquecyborg@gmail.com>
 * @returns {JSX.Element} The Download component.
 */
const Download: React.FC = () => {
    return (
        <section className="download">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="image-container mt-n6 mb-5">
                            <img
                                src="images/download-ebook.png"
                                alt="Ebook Cover" 
                                title="Ebook Cover" 
                                className="img-fluid"
                                loading="lazy" 
                            />
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="text-container text-white d-flex flex-column justify-content-center h-100 mb-5">
                            <h2 className="fw-bold">Get Your Free Ebook Now</h2>
                            <p>
                                Unlock the power of knowledge and take your blogging journey to
                                the next level. Our ebook, "Blog Mastery: The Ultimate Guide to
                                Blogging Success," is your key to success.
                            </p>

                            {/* Form */}
                            <form>
                                <div className="input-group mb-3">
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Email Address"
                                        aria-label="Email Address" 
                                        required 
                                    />
                                    <button
                                        className="btn btn-primary text-white rounded-end"
                                        type="submit"
                                    >
                                        Download
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Download;