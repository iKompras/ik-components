/* eslint-disable jsx-a11y/no-static-element-interactions, jsx-a11y/no-noninteractive-tabindex */
import React from "react";
import PropTypes from "prop-types";
import { Icon } from "semantic-ui-react";
import { useCardContext } from "../CardContext";
import styles from "../styles.module.css";

const Header = ({
	title,
	titleColor,
	subtitle,
	avatar,
	action,
	divider = false,
	showCollapseButton = true,
	collapseButton,
	className = "",
	style = {},
	onClick,
	children,
}) => {
	const context = useCardContext();
	const isCollapsible = context.collapsible;
	const { isCollapsed } = context;
	const isHeaderClickable = isCollapsible && context.collapseTrigger === "header";

	const headerStyle = {
		...style,
		...(titleColor ? { "--ik-card-title": titleColor } : {}),
	};

	const handleHeaderClick = (event) => {
		if (onClick) {
			onClick(event);
		}
		if (isHeaderClickable && context.toggleCollapse) {
			context.toggleCollapse();
		}
	};

	const handleCollapseBtnClick = (event) => {
		event.stopPropagation();
		if (context.toggleCollapse) {
			context.toggleCollapse();
		}
	};

	const headerClass = [styles.header, divider ? styles.headerWithDivider : "", isHeaderClickable ? styles.headerClickable : "", className]
		.filter(Boolean)
		.join(" ");

	const renderCollapseControl = () => {
		if (!isCollapsible || !showCollapseButton) {
			return null;
		}

		if (collapseButton) {
			return (
				<span
					onClick={handleCollapseBtnClick}
					role="button"
					tabIndex={0}
					onKeyDown={(e) => {
						if (e.key === "Enter" || e.key === " ") {
							e.preventDefault();
							handleCollapseBtnClick(e);
						}
					}}>
					{collapseButton}
				</span>
			);
		}

		return (
			<button
				type="button"
				className={styles.collapseButton}
				onClick={handleCollapseBtnClick}
				aria-label={isCollapsed ? "Expandir tarjeta" : "Colapsar tarjeta"}>
				<Icon name="chevron up" className={`${styles.chevronIcon} ${isCollapsed ? styles.chevronRotated : ""}`} style={{ margin: 0 }} />
			</button>
		);
	};

	if (children) {
		return (
			<header
				className={headerClass}
				style={headerStyle}
				onClick={handleHeaderClick}
				role={isHeaderClickable ? "button" : undefined}
				tabIndex={isHeaderClickable ? 0 : undefined}
				onKeyDown={(e) => {
					if (isHeaderClickable && (e.key === "Enter" || e.key === " ")) {
						e.preventDefault();
						handleHeaderClick(e);
					}
				}}>
				{children}
				{renderCollapseControl()}
			</header>
		);
	}

	return (
		<header
			className={headerClass}
			style={headerStyle}
			onClick={handleHeaderClick}
			role={isHeaderClickable ? "button" : undefined}
			tabIndex={isHeaderClickable ? 0 : undefined}
			onKeyDown={(e) => {
				if (isHeaderClickable && (e.key === "Enter" || e.key === " ")) {
					e.preventDefault();
					handleHeaderClick(e);
				}
			}}>
			<div className={styles.headerLeading}>
				{avatar && <div className={styles.headerAvatar}>{avatar}</div>}
				{(title || subtitle) && (
					<div className={styles.headerTextGroup}>
						{title && (typeof title === "string" ? <h3 className={styles.title}>{title}</h3> : title)}
						{subtitle && (typeof subtitle === "string" ? <p className={styles.subtitle}>{subtitle}</p> : subtitle)}
					</div>
				)}
			</div>
			<div className={styles.headerExtra}>
				{action}
				{renderCollapseControl()}
			</div>
		</header>
	);
};

Header.propTypes = {
	title: PropTypes.node,
	titleColor: PropTypes.string,
	subtitle: PropTypes.node,
	avatar: PropTypes.node,
	action: PropTypes.node,
	divider: PropTypes.bool,
	showCollapseButton: PropTypes.bool,
	collapseButton: PropTypes.node,
	className: PropTypes.string,
	style: PropTypes.object,
	onClick: PropTypes.func,
	children: PropTypes.node,
};

Header.displayName = "CardHeader";

export default Header;
