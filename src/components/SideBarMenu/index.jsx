// React
import React, { useState } from "react";

// Libraries
import PropTypes from "prop-types";
import { Menu, Icon, Popup } from "semantic-ui-react";
import { isEmpty, map } from "lodash";

// Components
import Text from "../Text";

// Constants
import MenuItemHeight from "./Constants";

// Styles
import styles from "./styles.module.css";

const SideBarMenu = ({
	isExtended = false,
	name = "",
	icon = "",
	path = "",
	type = "",
	subMenu = [],
	isActive = false,
	allowNavigation = false,
	onClick,
}) => {
	const [isOpen, setIsOpen] = useState(isActive);
	const subPath = isEmpty(subMenu) ? path : `${path}${subMenu[0].path}`;

	const handleClick = (refPath, refType) => {
		if (allowNavigation) {
			onClick(refPath, refType);
		} else if (onClick) {
			onClick();
		}
	};

	const handleTernaryClick = () => {
		if (isEmpty(subMenu)) {
			handleClick(subPath, type);
		} else {
			setIsOpen((prev) => {
				return !prev;
			});
		}
	};

	const getPopupOffset = ({ placement, popper, reference }) => {
		if (isEmpty(subMenu)) {
			return [];
		}
		if (placement === "right") {
			const modalBody = popper.height - MenuItemHeight;
			const modalMiddle = modalBody / 2;
			const height = reference.y + modalBody;
			let offset = modalMiddle - (isExtended ? 0 : MenuItemHeight);
			if (typeof window !== "undefined" && height > window.innerHeight) {
				offset -= window.innerHeight - height;
			}
			return [offset, 0];
		}
		return [];
	};

	const renderSubMenu = () => {
		if (isEmpty(subMenu)) return null;
		const currentWindow = typeof window !== "undefined" ? window.location.pathname : "";
		const items = map(subMenu, (item) => {
			const subMenuPath = `${path}${item.path}`;
			const current = currentWindow === subMenuPath;
			return (
				<Menu.Item
					key={item.id}
					className={current ? styles.activeMenuItem : styles.menuItem}
					onClick={() => {
						return handleClick(subMenuPath, type);
					}}>
					{!isEmpty(item.icon) && <Icon className={styles.subIcon} name={item.icon} />}
					<span className={styles.subText}>{item.name}</span>
				</Menu.Item>
			);
		});
		return items;
	};

	const renderPopupTrigger = () => {
		if (isExtended) {
			if (isOpen) {
				return (
					<div className={styles.itemSelectMultiple}>
						<Menu.Item className={styles.itemMultiple} onClick={handleTernaryClick}>
							<div className={styles.activeItem}>
								{!isEmpty(icon) && <Icon className={styles.icon} name={icon} />}
								<Text className={styles.text}>{name}</Text>
							</div>
						</Menu.Item>
						{renderSubMenu()}
					</div>
				);
			}
			return (
				<Menu.Item className={isActive ? styles.itemSelect : styles.item} onClick={handleTernaryClick}>
					<div className={styles.activeItem}>
						{!isEmpty(icon) && <Icon className={styles.icon} name={icon} />}
						<Text className={styles.text}>{name}</Text>
					</div>
				</Menu.Item>
			);
		}
		return (
			<Menu.Item
				className={isActive ? styles.itemSelect : styles.item}
				onClick={() => {
					return handleClick(subPath, type);
				}}>
				<div className={styles.activeItem}>{!isEmpty(icon) && <Icon className={styles.icon} name={icon} />}</div>
			</Menu.Item>
		);
	};

	const handleTitleClick = () => {
		if (isEmpty(subMenu)) {
			handleClick(path, type);
		}
	};

	return (
		<Popup
			className={styles.menu}
			on="hover"
			hoverable
			position="right center"
			pinned
			basic
			disabled={isExtended}
			offset={getPopupOffset}
			trigger={renderPopupTrigger()}>
			<Popup.Content>
				<Menu vertical>
					{!isExtended && (
						<Menu.Item className={!isEmpty(subMenu) ? styles.titleMenuItem : styles.titleMenu} onClick={handleTitleClick}>
							<Text className={styles.titleText}>{name}</Text>
						</Menu.Item>
					)}
					{renderSubMenu()}
				</Menu>
			</Popup.Content>
		</Popup>
	);
};

SideBarMenu.propTypes = {
	isExtended: PropTypes.bool,
	name: PropTypes.string,
	icon: PropTypes.string,
	path: PropTypes.string,
	type: PropTypes.string,
	subMenu: PropTypes.array,
	isActive: PropTypes.bool,
	allowNavigation: PropTypes.bool,
	onClick: PropTypes.func,
};

export default SideBarMenu;
