/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { forwardRef, useState, useMemo } from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import Media from "./Media";
import Badge from "./Badge";
import Divider from "./Divider";
import CardIcon from "./Icon";
import { CardContext } from "./CardContext";
import styles from "./styles.module.css";

const themeClassMap = {
	primary: styles.themePrimary,
	secondary: styles.themeSecondary,
	success: styles.themeSuccess,
	warning: styles.themeWarning,
	danger: styles.themeDanger,
	info: styles.themeInfo,
	dark: styles.themeDark,
};

const radiusClassMap = {
	none: styles.radiusNone,
	small: styles.radiusSm,
	sm: styles.radiusSm,
	medium: styles.radiusMd,
	md: styles.radiusMd,
	large: styles.radiusLg,
	lg: styles.radiusLg,
	xl: styles.radiusXl,
	full: styles.radiusFull,
};

const paddingClassMap = {
	none: styles.padNone,
	small: styles.padSm,
	medium: styles.padMd,
	large: styles.padLg,
};

const accentClassMap = {
	top: styles.accentTop,
	left: styles.accentLeft,
	bottom: styles.accentBottom,
	right: styles.accentRight,
};

const variantClassMap = {
	elevated: styles.elevated,
	outlined: styles.outlined,
	flat: styles.flat,
	soft: styles.soft,
	glass: styles.glass,
	gradient: styles.gradient,
};

const Card = forwardRef((props, ref) => {
	const {
		children,
		variant = "elevated",
		color,
		bgColor,
		textColor,
		borderColor,
		accentColor,
		glowColor,
		accent = "none",
		direction = "vertical",
		responsive = true,
		hoverable = false,
		glow = false,
		clickable = false,
		fluid = true,
		radius = "large",
		padding,
		loading = false,
		collapsible = false,
		collapsed: controlledCollapsed,
		defaultCollapsed = false,
		onCollapseChange,
		collapseTrigger = "button",
		className = "",
		style = {},
		onClick,
		onKeyDown,
		tabIndex,
		role,
	} = props;

	const isControlled = controlledCollapsed !== undefined;
	const [internalCollapsed, setInternalCollapsed] = useState(defaultCollapsed);
	const isCollapsed = isControlled ? controlledCollapsed : internalCollapsed;

	const toggleCollapse = () => {
		const nextState = !isCollapsed;
		if (!isControlled) {
			setInternalCollapsed(nextState);
		}
		if (onCollapseChange) {
			onCollapseChange(nextState);
		}
	};

	const contextValue = useMemo(() => {
		return {
			collapsible,
			isCollapsed,
			toggleCollapse,
			collapseTrigger,
		};
	}, [collapsible, isCollapsed, collapseTrigger]);

	const isPresetTheme = color && themeClassMap[color];
	const isCustomColor = color && !themeClassMap[color];

	// Determine custom CSS variables for inline style
	const dynamicStyles = {
		...style,
	};

	if (bgColor) {
		dynamicStyles["--ik-card-bg"] = bgColor;
	}
	if (textColor) {
		dynamicStyles["--ik-card-text"] = textColor;
	}
	if (borderColor) {
		dynamicStyles["--ik-card-border"] = borderColor;
	}
	if (accentColor) {
		dynamicStyles["--ik-card-accent"] = accentColor;
	}
	if (glowColor) {
		dynamicStyles["--ik-card-glow"] = glowColor;
	}

	// Custom color fallback
	if (isCustomColor) {
		dynamicStyles["--ik-card-accent"] = color;
		if (!glowColor) {
			dynamicStyles["--ik-card-glow"] = color;
		}
		if (variant === "soft") {
			dynamicStyles["--ik-card-border-soft"] = color;
		}
	}

	// Custom string radius (e.g. "20px" or "1.5rem")
	if (radius && !radiusClassMap[radius]) {
		dynamicStyles["--ik-card-radius"] = radius;
	}

	// Determine direction class
	let layoutClass = styles.vertical;
	if (direction === "horizontal") {
		layoutClass = responsive ? styles.responsiveHorizontal : styles.horizontal;
	}

	const isInteractive = clickable || (typeof onClick === "function" && !collapsible);

	const cardClasses = [
		styles.card,
		variantClassMap[variant] || styles.elevated,
		isPresetTheme ? themeClassMap[color] : "",
		fluid ? styles.fluid : styles.notFluid,
		radiusClassMap[radius] || "",
		padding ? paddingClassMap[padding] : "",
		accentClassMap[accent] || "",
		hoverable ? styles.hoverable : "",
		glow ? styles.hoverGlow : "",
		isInteractive ? styles.clickable : "",
		layoutClass,
		className,
	]
		.filter(Boolean)
		.join(" ");

	const handleKeyDown = (event) => {
		if (onKeyDown) {
			onKeyDown(event);
		}
		if (isInteractive && (event.key === "Enter" || event.key === " ")) {
			event.preventDefault();
			if (onClick) {
				onClick(event);
			}
		}
	};

	// Separate Header from other children when collapsible
	const renderContent = () => {
		if (!collapsible) {
			return children;
		}

		const childrenArray = React.Children.toArray(children);
		const headerIndex = childrenArray.findIndex((child) => {
			return (
				React.isValidElement(child) &&
				(child.type === Header || child.type?.displayName === "CardHeader" || child.props?.displayName === "CardHeader")
			);
		});

		if (headerIndex === -1) {
			return (
				<div className={`${styles.collapseGrid} ${isCollapsed ? styles.collapseGridCollapsed : ""}`}>
					<div className={styles.collapseContent}>{children}</div>
				</div>
			);
		}

		const headerElement = childrenArray[headerIndex];
		const otherChildren = childrenArray.filter((_, idx) => {
			return idx !== headerIndex;
		});

		return (
			<>
				{headerElement}
				<div className={`${styles.collapseGrid} ${isCollapsed ? styles.collapseGridCollapsed : ""}`}>
					<div className={styles.collapseContent}>{otherChildren}</div>
				</div>
			</>
		);
	};

	return (
		<CardContext.Provider value={contextValue}>
			<div
				ref={ref}
				className={cardClasses}
				style={dynamicStyles}
				onClick={isInteractive ? onClick : undefined}
				onKeyDown={isInteractive ? handleKeyDown : onKeyDown}
				role={role || (isInteractive ? "button" : undefined)}
				tabIndex={tabIndex !== undefined ? tabIndex : isInteractive ? 0 : undefined}>
				{renderContent()}

				{loading && (
					<div className={styles.loadingOverlay}>
						<div className={styles.spinner} />
						<span>Cargando...</span>
					</div>
				)}
			</div>
		</CardContext.Provider>
	);
});

Card.displayName = "Card";

Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;
Card.Media = Media;
Card.Badge = Badge;
Card.Divider = Divider;
Card.Icon = CardIcon;

Card.propTypes = {
	children: PropTypes.node,
	variant: PropTypes.oneOf(["elevated", "outlined", "flat", "soft", "glass", "gradient"]),
	color: PropTypes.string,
	bgColor: PropTypes.string,
	textColor: PropTypes.string,
	borderColor: PropTypes.string,
	accentColor: PropTypes.string,
	glowColor: PropTypes.string,
	accent: PropTypes.oneOf(["none", "top", "left", "bottom", "right"]),
	direction: PropTypes.oneOf(["vertical", "horizontal"]),
	responsive: PropTypes.bool,
	hoverable: PropTypes.bool,
	glow: PropTypes.bool,
	clickable: PropTypes.bool,
	fluid: PropTypes.bool,
	radius: PropTypes.string,
	padding: PropTypes.oneOf(["none", "small", "medium", "large"]),
	loading: PropTypes.bool,
	collapsible: PropTypes.bool,
	collapsed: PropTypes.bool,
	defaultCollapsed: PropTypes.bool,
	onCollapseChange: PropTypes.func,
	collapseTrigger: PropTypes.oneOf(["header", "button"]),
	className: PropTypes.string,
	style: PropTypes.object,
	onClick: PropTypes.func,
	onKeyDown: PropTypes.func,
	tabIndex: PropTypes.number,
	role: PropTypes.string,
};

export default Card;
