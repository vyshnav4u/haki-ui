import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import './DropDown.scss';
import KeyboardDownArrow from '../../../icons/icon-components/KeyboardDownArrow';
import Check from '../../../icons/icon-components/Check';

interface IDropDownOption {
	label: string;
	value: string;
}

interface IFontProps {
	fontSize?: React.CSSProperties['fontSize'];
	fontColor?: React.CSSProperties['color'];
	fontFamily?: React.CSSProperties['fontFamily'];
}

interface IDropDown {
	options: IDropDownOption[];
	selectedValue?: string;
	disabled?: boolean;
	showCheckMarkOnSelection?: boolean;
	fontProps?: IFontProps;
	dropDownOpenToTop?: boolean;
}

const DropDown = (props: IDropDown) => {
	const { options, selectedValue, disabled, showCheckMarkOnSelection, dropDownOpenToTop } = props;
	if (!options.length || disabled) return <DisabledDropDown />;

	const iconSize = 20;
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const [selectedItemIndex, setSelectedItemIndex] = useState(0);
	useEffect(() => {
		const itemIndex = options.findIndex((option) => option.value === selectedValue);
		if (itemIndex !== -1) {
			setSelectedItemIndex(itemIndex);
		}
	}, []);
	const openCloseDropDown = () => setIsDropdownOpen(!isDropdownOpen);
	const onDropDownItemClick = (e: React.MouseEvent<HTMLElement, MouseEvent>, itemIndex: number) => {
		setIsDropdownOpen(false);
		setSelectedItemIndex(itemIndex);
	};

	const selectedItem = options[selectedItemIndex];
	const dropDownContainerStyle: React.CSSProperties = {};
	if (dropDownOpenToTop) {
		dropDownContainerStyle.bottom = '0';
	} else {
		dropDownContainerStyle.top = '0';
	}
	return (
		<section className="haki-ui DropDown-container">
			<button className="DropDown-selected-value-container" onClick={openCloseDropDown}>
				<label> {selectedItem.label} </label> <KeyboardDownArrow height={iconSize} width={iconSize} />
			</button>
			{isDropdownOpen && (
				<ul className="DropDown-options-container" style={dropDownContainerStyle}>
					{/* To adjust spacing issue adding this */}
					{!dropDownOpenToTop && (
						<button className="DropDown-selected-value-container dummy">
							<label> {selectedItem.label} </label> <KeyboardDownArrow height={iconSize} width={iconSize} />
						</button>
					)}
					{options.map((option, optionIndex) => (
						<li
							key={option.value}
							className={classNames('DropDown-item', { active: option.value === selectedItem.value })}
							onClick={(e) => onDropDownItemClick(e, optionIndex)}
						>
							<label> {option.label} </label>
							{option.value === selectedItem.value && showCheckMarkOnSelection && <Check height={iconSize} width={iconSize} />}
						</li>
					))}
					{/* To adjust spacing issue adding this */}
					{dropDownOpenToTop && (
						<button className="DropDown-selected-value-container dummy">
							<label> {selectedItem.label} </label> <KeyboardDownArrow height={iconSize} width={iconSize} />
						</button>
					)}
				</ul>
			)}
		</section>
	);
};

const DisabledDropDown = () => {
	return (
		<div className="DropDown-container">
			<div className="DropDown-selected-value-container disabled">
				<label>Select</label>
				<KeyboardDownArrow height={24} width={24} />
			</div>
		</div>
	);
};

export default DropDown;
