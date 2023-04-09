import IconWrapper, { IIconProps } from '../IconWrapper';

export const checkPath =
	'M380.308 785.385 183.231 588.308l22.23-21.462 174.847 174.846 374-374.769 22.231 22.231-396.231 396.231Z';
const Check = (props: IIconProps) => {
	return <IconWrapper {...props} d={checkPath} />;
};

export default Check;
