// React
import React from "react";

// Libraries
import PropTypes from "prop-types";
import { Sidebar, Menu } from "semantic-ui-react";
import { isEmpty, map, includes } from "lodash";

// Components
import SideBarMenu from "../SideBarMenu";

// Styles
import styles from "./styles.module.css";

const SideBar = ({
	handleToggle,
	isExtended = false,
	menu = [],
	isMobileOrTablet = false,
	isVisible = true,
	companyName = "",
	onNavigate,
	currentPath,
	isMobile = false,
}) => {
	const handleNavigate = (path, type) => {
		if (type === "link") {
			window.open(path, "_blank");
		} else if (onNavigate) {
			onNavigate(path, type);
		} else if (type === "menu") {
			if (typeof window !== "undefined") {
				window.location.pathname = path;
			}
		}
	};

	const renderMenuItems = () => {
		if (isEmpty(menu)) return null;
		const currentWindow = currentPath || (typeof window !== "undefined" ? window.location.pathname : "");
		const items = map(menu, (item) => {
			if (item.type === "divider") return <div key={item.id} className={styles.divider} />;
			let current = currentWindow === item.path;
			if (!isEmpty(item.subMenu)) {
				const possiblePaths = map(item.subMenu, (pathItem) => {
					return `${item.path}${pathItem.path}`;
				});
				current = includes(possiblePaths, currentWindow);
			}
			return (
				<SideBarMenu
					key={item.id}
					isExtended={isMobileOrTablet ? true : isExtended}
					allowNavigation
					name={item.name}
					icon={item.icon}
					type={item.type}
					path={item.path}
					subMenu={item.subMenu}
					isActive={current}
					onClick={handleNavigate}
				/>
			);
		});
		return items;
	};

	return (
		<Sidebar
			className={isExtended ? styles.sideBar : styles.collapsedSidebar}
			as={Menu}
			direction="left"
			animation={isMobileOrTablet ? "overlay" : "push"}
			visible={isVisible}
			vertical
			icon
			width="wide">
			{isMobile && companyName && (
				<SideBarMenu isExtended={isMobileOrTablet ? true : isExtended} allowNavigation={false} path={null} name={companyName} />
			)}
			<div className={isMobileOrTablet ? styles.mobileItems : styles.menuItems}>{renderMenuItems()}</div>
			<SideBarMenu
				isExtended={isMobileOrTablet ? true : isExtended}
				allowNavigation={false}
				path={null}
				name={isExtended ? "Colapsar" : "Expandir"}
				icon={isExtended ? "angle double left" : "angle double right"}
				onClick={handleToggle}
			/>
		</Sidebar>
	);
};

SideBar.propTypes = {
	handleToggle: PropTypes.func,
	isExtended: PropTypes.bool,
	isMobileOrTablet: PropTypes.bool,
	isVisible: PropTypes.bool,
	companyName: PropTypes.string,
	menu: PropTypes.array,
	onNavigate: PropTypes.func,
	currentPath: PropTypes.string,
	isMobile: PropTypes.bool,
};

export default SideBar;
