import React from 'react';
import classNames from 'classnames';
import { IDropDownOption, IFontProps } from './DropDown';
import Check from '../../../icons/icon-components/Check';

interface IOption {
	option: IDropDownOption;
	selectedItem: IDropDownOption;
	optionIndex: number;
	onDropDownItemClick: (itemIndex: number) => void;
	fontProps: IFontProps;
	showCheckMarkOnSelection: boolean | undefined;
	enableSearch: boolean | undefined;
	searchKeyWord: string;
}
const Option = (props: IOption) => {
	const {
		option,
		optionIndex,
		selectedItem,
		fontProps,
		onDropDownItemClick,
		showCheckMarkOnSelection,
		searchKeyWord,
		enableSearch,
	} = props;
	
	if (enableSearch && !option.label.toLowerCase().includes(searchKeyWord.toLowerCase())) return null;

	const { fontSize } = fontProps;
	const isSelectedValue = option.value === selectedItem.value;

	return (
		<li
			className={classNames('DropDown-item', { active: isSelectedValue })}
			onClick={() => onDropDownItemClick(optionIndex)}
		>
			<label style={{ ...fontProps }}> {option.label} </label>
			{isSelectedValue && showCheckMarkOnSelection && <Check height={fontSize} width={fontSize} />}
		</li>
	);
};

export default Option;
