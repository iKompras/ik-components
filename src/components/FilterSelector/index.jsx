/* eslint-disable react/jsx-props-no-spreading */
import React, { forwardRef, useState } from "react";
import PropTypes from "prop-types";
import FilterBar from "./FilterBar";
import FilterModal from "./FilterModal";

const FilterSelector = forwardRef((props, ref) => {
	const {
		useModal = false,
		fetchOptions = null,
		modalTitle = "Buscar y seleccionar",
		modalIcon = "search",
		modalView = "table",
		modalColumns = [],
		pageSize = 5,
		placeholder = "Buscar o filtrar...",
		options = [],
		multiple = false,
		selectedValues,
		defaultSelectedValues = [],
		onSelectChange,
		onChange,
		loading = false,
		value,
		...rest
	} = props;

	const [isModalOpen, setIsModalOpen] = useState(false);
	const [internalSelected, setInternalSelected] = useState(Array.isArray(defaultSelectedValues) ? defaultSelectedValues : []);
	const [internalQuery, setInternalQuery] = useState("");

	const isControlledSelected = selectedValues !== undefined;
	const isControlledQuery = value !== undefined;
	const activeSelected = isControlledSelected ? selectedValues : internalSelected;
	const activeQuery = isControlledQuery ? value : internalQuery;

	return (
		<>
			<FilterBar
				ref={ref}
				{...rest}
				useModal={useModal}
				placeholder={placeholder}
				options={options}
				multiple={multiple}
				selectedValues={activeSelected}
				value={activeQuery}
				loading={loading}
				onChange={(q, meta) => {
					if (!isControlledQuery) setInternalQuery(q);
					if (onChange) onChange(q, meta);
				}}
				onSelectChange={(vals, items) => {
					if (!isControlledSelected) {
						setInternalSelected(Array.isArray(vals) ? vals : vals ? [vals] : []);
					}
					if (onSelectChange) onSelectChange(vals, items);
				}}
				onOpenModal={() => {
					setIsModalOpen(true);
				}}
			/>

			{useModal && (
				<FilterModal
					isOpen={isModalOpen}
					onClose={() => {
						setIsModalOpen(false);
					}}
					title={modalTitle}
					iconName={modalIcon}
					modalView={modalView}
					placeholder={placeholder}
					options={options}
					fetchOptions={fetchOptions}
					multiple={multiple}
					selectedValues={activeSelected}
					modalColumns={modalColumns}
					pageSize={pageSize}
					loading={loading}
					onConfirm={(vals, items) => {
						const nextArr = multiple ? vals : vals !== null && vals !== undefined ? [vals] : [];
						if (!isControlledSelected) {
							setInternalSelected(nextArr);
						}
						if (!multiple && !isControlledQuery) {
							setInternalQuery(items ? items.text || items.label || items.name || "" : "");
						}
						if (onSelectChange) {
							onSelectChange(vals, items);
						}
					}}
				/>
			)}
		</>
	);
});

FilterSelector.displayName = "FilterSelector";

FilterSelector.propTypes = {
	useModal: PropTypes.bool,
	fetchOptions: PropTypes.func,
	modalTitle: PropTypes.string,
	modalIcon: PropTypes.string,
	modalView: PropTypes.oneOf(["table", "list"]),
	modalColumns: PropTypes.array,
	pageSize: PropTypes.number,
	placeholder: PropTypes.string,
	options: PropTypes.array,
	multiple: PropTypes.bool,
	selectedValues: PropTypes.array,
	defaultSelectedValues: PropTypes.array,
	onSelectChange: PropTypes.func,
	onChange: PropTypes.func,
	loading: PropTypes.bool,
	value: PropTypes.string,
};

export default FilterSelector;
