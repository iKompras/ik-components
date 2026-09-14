import React, { useState } from "react";
import PropTypes from "prop-types";
import { Icon, Popup, Menu } from "semantic-ui-react";
import { map, isEmpty } from "lodash";
import styles from "./styles.module.css";

const ActionsMenu = ({ rowData, columnsData, onHandlerTable, isPDF }) => {
	const [isOpen, setIsOpen] = useState(false);

	const allActions = [];
	map(columnsData, ({ action: columnAction, key: columnKey }) => {
		if (!isEmpty(columnAction) && !isPDF) {
			map(columnAction, (actionItem) => {
				const { content, hidden, type, color = "hsl(0, 0%, 95%)", onClick, visible } = actionItem;
				if (hidden) return;
				if (typeof visible === "function" && visible(rowData) === false) return;
				if (type === "icon" || type === "link") {
					let actionText = content;
					if (type === "icon") {
						if (content === "edit") actionText = "Editar";
						else if (content === "trash" || content === "delete") actionText = "Borrar";
						else if (content === "eye") actionText = "Ver";
						else if (content === "copy") actionText = "Copiar";
					}
					allActions.push({
						key: `${columnKey}-${content}`,
						text: actionText,
						icon: type === "icon" ? content : null,
						color: type === "icon" ? color : null,
						onClick: () => {
							setIsOpen(false);
							onHandlerTable(onClick, rowData);
						},
					});
				}
			});
		}
	});

	if (isEmpty(allActions)) return null;

	const menuItems = map(allActions, (action) => {
		return (
			<Menu.Item
				key={action.key}
				className={styles.cardMenuItem}
				onClick={(e) => {
					e.stopPropagation();
					action.onClick();
				}}>
				{action.icon && (
					<Icon
						name={action.icon}
						className={styles.cardMenuIconItem}
						style={{
							color: action.color || "#6b7280",
						}}
					/>
				)}
				<span className={styles.cardMenuText}>{action.text}</span>
			</Menu.Item>
		);
	});

	return (
		<div
			className={styles.cardActionsMenu}
			onDoubleClick={(e) => {
				e.stopPropagation();
			}}>
			<Popup
				className={styles.cardActionsMenuPopup}
				trigger={
					<Icon
						name="ellipsis vertical"
						size="large"
						className={styles.cardMenuIcon}
						onClick={(e) => {
							e.stopPropagation();
						}}
						onDoubleClick={(e) => {
							e.stopPropagation();
						}}
						onMouseDown={(e) => {
							e.stopPropagation();
						}}
					/>
				}
				on="click"
				position="top right"
				open={isOpen}
				onOpen={() => {
					setIsOpen(true);
				}}
				onClose={() => {
					setIsOpen(false);
				}}>
				<Popup.Content className={styles.cardMenuPopupContent}>
					<Menu vertical className={styles.cardMenu}>
						{menuItems}
					</Menu>
				</Popup.Content>
			</Popup>
		</div>
	);
};

ActionsMenu.propTypes = {
	rowData: PropTypes.object.isRequired,
	columnsData: PropTypes.array.isRequired,
	onHandlerTable: PropTypes.func.isRequired,
	isPDF: PropTypes.bool,
};

export default ActionsMenu;
