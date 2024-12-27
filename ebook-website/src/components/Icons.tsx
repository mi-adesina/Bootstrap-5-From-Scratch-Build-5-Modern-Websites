import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUser,
    faRocket,
    faDollarSign,
    IconDefinition, // Import IconDefinition type
} from "@fortawesome/free-solid-svg-icons";

interface IconData {
    icon: IconDefinition;
    title: string;
    text: string;
    iconColor: string;
}

/**
 * Component displaying a section of icons with descriptions.
 */
const Icons: React.FC = () => {
    const iconData: IconData[] = [
        {
            icon: faUser,
            title: "Unlock Your Blogging Potential",
            text: "Discover the key to unleashing your true blogging potential. Our ebook provides expert guidance on creating compelling content",
            iconColor: "text-primary",
        },
        {
            icon: faRocket,
            title: "Skyrocket Your Blog's Success",
            text: "Take your blog to new heights with our proven strategies for driving traffic and increasing your blog's visibility.",
            iconColor: "text-secondary",
        },
        {
            icon: faDollarSign,
            title: "Monetize Your Blog",
            text: "Turn your passion for blogging into a profitable venture. Our ebook reveals tried-and-tested monetization strategies",
            iconColor: "text-primary",
        },
    ];

    return (
        <section className="icons bg-light pb-5">
            <div className="container-xl">
                <div className="row hstack g-4">
                    {iconData.map((item, index) => (
                        <IconItem key={index} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

interface IconItemProps {
    icon: IconDefinition;
    title: string;
    text: string;
    iconColor: string;
}

/**
 * Reusable component for displaying an icon with a title and text.
 * @param {IconItemProps} props - The component props.
 */
const IconItem: React.FC<IconItemProps> = ({ icon, title, text, iconColor }) => (
    <div className="col-md-4 d-flex gap-4">
        <FontAwesomeIcon
            icon={icon}
            size="3x"
            className={iconColor}
            aria-hidden="true"
        />
        <div>
            <h5 className="fw-bold">{title}</h5>
            <p className="text-muted">{text}</p>
        </div>
    </div>
);

export default Icons;