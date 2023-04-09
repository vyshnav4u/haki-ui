import IconWrapper, { IIconProps } from '../IconWrapper';

const KeyboardDownArrowPath =
	'M480 684.308 267.692 472l22.231-22.231L480 639.846l190.077-190.077L692.308 472 480 684.308Z';
const KeyboardDownArrow = (props: IIconProps) => {
	return <IconWrapper {...props} d={KeyboardDownArrowPath} />;
};

export default KeyboardDownArrow;
