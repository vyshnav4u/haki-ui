import React, { useEffect, useState } from 'react';
import './DropDown.scss';
import KeyboardDownArrow from '../../../icons/icon-components/KeyboardDownArrow';
import Option from './Option';
import Search from '../../../icons/icon-components/Search';

const ICON_SIZE_OFFSET = 4;
const H_PADDING = 4;
export interface IDropDownOption {
	label: string;
	value: string;
}

export interface IFontProps {
	fontSize?: number;
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
	enableSearch?: boolean;
	showSearchIcon?: boolean;
	searchPlaceHolder?: string;
	minWidth?: number;
}

const DropDown = (props: IDropDown) => {
	const {
		options,
		selectedValue,
		disabled,
		showCheckMarkOnSelection,
		dropDownOpenToTop,
		enableSearch,
		fontProps = { fontSize: 16 },
		showSearchIcon,
		searchPlaceHolder,
		minWidth = 120,
	} = props;
	const { fontSize } = fontProps;
	if (!options.length || disabled) return <DisabledDropDown />;

	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const [selectedItemIndex, setSelectedItemIndex] = useState(0);
	const [searchKeyWord, setSearchKeyword] = useState('');
	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchKeyword(e.target.value);
	};
	useEffect(() => {
		const itemIndex = options.findIndex((option) => option.value === selectedValue);
		if (itemIndex !== -1) {
			setSelectedItemIndex(itemIndex);
		}
	}, []);
	const openCloseDropDown = () => setIsDropdownOpen(!isDropdownOpen);
	const onDropDownItemClick = (itemIndex: number) => {
		setIsDropdownOpen(false);
		setSelectedItemIndex(itemIndex);
	};

	const selectedItem = options[selectedItemIndex];
	const dropDownContainerStyle: React.CSSProperties = {minWidth};
	const dropDownOptionContainerStyle: React.CSSProperties = {};
	if (dropDownOpenToTop) {
		dropDownOptionContainerStyle.bottom = '0';
	} else {
		dropDownOptionContainerStyle.top = '0';
	}
	return (
		<section style={dropDownContainerStyle} className="haki-ui DropDown-container">
			<button className="DropDown-selected-value-container" onClick={openCloseDropDown}>
				<label style={{ ...fontProps }}> {selectedItem.label} </label>{' '}
				<KeyboardDownArrow height={fontSize} width={fontSize} />
			</button>
			{isDropdownOpen && (
				<ul className="DropDown-options-container" style={dropDownOptionContainerStyle}>
					{/* To adjust spacing issue adding this */}
					{!dropDownOpenToTop && (
						<button className="DropDown-selected-value-container dummy">
							<label style={{ ...fontProps }}> {selectedItem.label} </label>{' '}
							<KeyboardDownArrow height={fontSize} width={fontSize} />
						</button>
					)}
					{enableSearch && (
						<li className="DropDown-search-box">
							<input style={{paddingLeft: Number(fontSize) + ICON_SIZE_OFFSET + H_PADDING}} type="text" value={searchKeyWord} onChange={handleSearch} placeholder={searchPlaceHolder ?? 'Search'} />
							{showSearchIcon && <Search fill='#5d5b5b' containerClassName='search-icon' height={Number(fontSize) + ICON_SIZE_OFFSET} width={Number(fontSize) + ICON_SIZE_OFFSET} />}
						</li>
					)}
					{options.map((option, optionIndex) => (
						<Option
							key={option.value}
							option={option}
							optionIndex={optionIndex}
							selectedItem={selectedItem}
							fontProps={fontProps}
							onDropDownItemClick={onDropDownItemClick}
							showCheckMarkOnSelection={showCheckMarkOnSelection}
							enableSearch= {enableSearch}
							searchKeyWord= {searchKeyWord}
						/>
					))}
					{/* To adjust spacing issue adding this */}
					{dropDownOpenToTop && (
						<button className="DropDown-selected-value-container dummy">
							<label style={{ ...fontProps }}> {selectedItem.label} </label>
							<KeyboardDownArrow height={fontSize} width={fontSize} />
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
