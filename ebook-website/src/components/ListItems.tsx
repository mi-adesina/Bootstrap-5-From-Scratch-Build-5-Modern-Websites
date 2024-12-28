import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons";

/**
 * Interface defining the props for the ListItems component.
 * @interface ListItemsProps
 * @property {string} title - The title of the list item.
 * @property {string} text - The description text of the list item.
 */
interface ListItemsProps {
	title: string;
	text: string;
}

/**
 * Reusable component for rendering a single list item with an icon, title, and text.
 * @component
 * @author Michael Adesina <uniquecyborg@gmail.com>
 * @param {ListItemsProps} props - The component props.
 * @returns {JSX.Element} The ListItems component.
 */
const ListItems: React.FC<ListItemsProps> = ({ title, text }) => (
	<li className="list-group-item">
		<FontAwesomeIcon
			icon={faSquare}
			className="text-primary"
			aria-hidden="true"
		/>
		<strong> {title}:</strong> {text}
	</li>
);

export default ListItems;
