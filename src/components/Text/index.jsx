import React from "react";
import { Header } from "semantic-ui-react";
import PropTypes from "prop-types";

// Styles
import styles from "./styles.module.css";

const Text = ({ children = "", className, as, href, disabled = false, style, withMarkdown = false, onClick = () => {} }) => {
	const parseWhatsappMarkdown = (text) => {
		const regex = /(\*[^*]+\*|_[^_]+_|~[^~]+~|`[^`]+`)/g;
		const parts = text.split(regex);
		return parts.map((part, index) => {
			if (part.startsWith("*") && part.endsWith("*")) {
				return (
					<strong key={index} style={{ fontWeight: "bolder" }}>
						{part.slice(1, -1)}
					</strong>
				);
			}
			if (part.startsWith("_") && part.endsWith("_")) {
				return (
					<em key={index} style={{ fontStyle: "italic" }}>
						{part.slice(1, -1)}
					</em>
				);
			}
			if (part.startsWith("~") && part.endsWith("~")) {
				return (
					<del key={index} style={{ textDecoration: "line-through" }}>
						{part.slice(1, -1)}
					</del>
				);
			}
			return <span key={index}>{part}</span>;
		});
	};

	const renderChildren = () => {
		if (typeof children === "string" && withMarkdown) {
			return parseWhatsappMarkdown(children);
		}
		return children;
	};

	return (
		<Header
			as={as || "p"}
			className={`${styles.text} ${className || ""}`.trim()}
			href={href}
			disabled={disabled}
			style={style}
			onClick={onClick}>
			{renderChildren()}
		</Header>
	);
};

Text.propTypes = {
	children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
	className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
	as: PropTypes.string,
	href: PropTypes.string,
	disabled: PropTypes.bool,
	withMarkdown: PropTypes.bool,
	onClick: PropTypes.func,
	style: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default Text;
