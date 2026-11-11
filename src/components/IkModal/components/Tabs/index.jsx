import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Button, Icon } from "semantic-ui-react";
import { orderBy, isEmpty, map, forEach, filter } from "lodash";
import styles from "./styles.module.css";

const Tabs = ({ handleStateHeader, stateHeader, buttons }) => {
	const [visibleButtons, setVisibleButtons] = useState([]);
	const [hiddenButtons, setHiddenButtons] = useState([]);
	const [showDropdown, setShowDropdown] = useState(false);
	const navRef = useRef(null);

	// Función helper para medir anchos de elementos de forma segura
	const measureElement = (content, isMoreButton = false) => {
		if (!navRef.current) return 0;
		const tempBtn = document.createElement("button");
		tempBtn.className = isMoreButton ? styles.moreButton : styles.navButton;
		tempBtn.style.cssText = "visibility: hidden; position: absolute; font-size: 16px; padding: 12px 20px; white-space: nowrap;";
		tempBtn.innerHTML = content;
		navRef.current.appendChild(tempBtn);
		const width = tempBtn.offsetWidth;
		navRef.current.removeChild(tempBtn);
		return width;
	};

	const adjustButtons = () => {
		if (!navRef.current) return;

		const navWidth = navRef.current.clientWidth;
		if (navWidth === 0) return;

		const moreButtonWidth = measureElement("...");
		let currentTotalWidth = 0;
		const visible = [];
		const hidden = [];

		const sortedButtons = orderBy(buttons, ["order"], ["asc"]);
		const totalButtons = sortedButtons.length;

		forEach(sortedButtons, (btn, index) => {
			const btnContent = `<i class="icon ${btn.icon}"></i> ${btn.label} ${btn.count ? `(${btn.count})` : ""}`;
			const btnWidth = measureElement(btnContent);

			const isLast = index === totalButtons - 1;
			const extraSpace = !isLast ? moreButtonWidth : 0;

			if (currentTotalWidth + btnWidth + extraSpace <= navWidth - 10) {
				currentTotalWidth += btnWidth;
				visible.push(btn);
			} else {
				hidden.push(btn);
			}
		});

		setVisibleButtons(visible);
		setHiddenButtons(hidden);
	};

	useEffect(() => {
		const observer = new ResizeObserver(adjustButtons);
		if (navRef.current) observer.observe(navRef.current);
		return () => {
			return observer.disconnect();
		};
	}, [buttons]);

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (navRef.current && !navRef.current.contains(event.target)) {
				setShowDropdown(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			return document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	const renderTabButton = (btn, isDropdown = false) => {
		const buttonClasses = filter([
			styles.navButton,
			stateHeader === btn.state && styles.active,
			btn.errors && styles.errorsButon,
			btn.color === "red" && styles.redButton,
		]).join(" ");

		return (
			<div key={btn.key} className={styles.buttonContainer}>
				<Button
					disabled={!!btn.disabled}
					className={buttonClasses}
					onClick={() => {
						if (btn.disabled) return;
						if (btn.onClick) {
							btn.onClick();
						} else {
							handleStateHeader(btn.state);
						}
						if (isDropdown) setShowDropdown(false);
					}}>
					<Icon name={btn.icon} />
					<span>
						{btn.label} {btn.count !== undefined && `(${btn.count})`}
					</span>
					{btn.errors && <span className={styles.errorDot} />}
				</Button>
				{!isEmpty(btn.error) && <div className={styles.volatileError}>Campos Requeridos</div>}
			</div>
		);
	};

	return (
		<div className={styles.divHeaderNav} ref={navRef}>
			{map(visibleButtons, (btn) => {
				return renderTabButton(btn);
			})}

			{!isEmpty(hiddenButtons) && (
				<div className={styles.moreWrapper}>
					<Button
						className={styles.moreButton}
						onClick={() => {
							return setShowDropdown(!showDropdown);
						}}>
						...
					</Button>
					{showDropdown && (
						<div className={styles.moreDropdown}>
							{map(hiddenButtons, (btn) => {
								return renderTabButton(btn, true);
							})}
						</div>
					)}
				</div>
			)}
		</div>
	);
};

Tabs.propTypes = {
	handleStateHeader: PropTypes.func.isRequired,
	stateHeader: PropTypes.string.isRequired,
	buttons: PropTypes.arrayOf(
		PropTypes.shape({
			key: PropTypes.string.isRequired,
			state: PropTypes.string.isRequired,
			label: PropTypes.string.isRequired,
			count: PropTypes.number,
			icon: PropTypes.string,
			order: PropTypes.number.isRequired,
			errors: PropTypes.bool,
			onClick: PropTypes.func,
			color: PropTypes.string,
			disabled: PropTypes.bool,
		})
	).isRequired,
};

export default Tabs;
