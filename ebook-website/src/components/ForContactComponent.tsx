import React from 'react';

/**
 * ForContactConponent is a part of the contact header that is exclusive to the contact page.
 * It is intended to be rendered conditionally within a parent component (e.g., Header)
 * when the user is on the contact page.
 *
 * @returns {JSX.Element} The ForContactConponent JSX element.
 * @author Michael Adesina <uniquecyborg@gmail.com>
 *
 * @example
 * const MyParentComponent: React.FC = () => {
 *   const isHomePage = false; // Condition for rendering Contact component
 *   return (
 *     <Header 
 *       isHome={isHomePage} 
 *       ForHomeComponent={<ForHomeComponent />} 
 *       ForContactConponent={<ForContactConponent />}
 *     />
 *   );
 * };
 */
const ForContactComponent: React.FC = () => { // Removed the parameter here
    return (
        <>
            <div className="col-12 pb-4">
                <h1>Contact Information</h1>
            </div>
        </>
    );
};

export default ForContactComponent;