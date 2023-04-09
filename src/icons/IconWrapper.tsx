import classNames from 'classnames';
import './styles/icons.scss';

export interface IIconProps {
	d?: string;
	height?: number | string;
	width?: number | string;
	fill?: React.CSSProperties['fill'];
	translateX?: number;
	translateY?: number;
	containerClassName?: string;
}
const IconWrapper = ({
	height = 48,
	width = 48,
	fill = '#000',
	translateX = 0,
	translateY = 0,
	d,
	containerClassName,
}: IIconProps) => {
	return (
		<div className={classNames(containerClassName, 'haki-ui icon-container')}>
			<svg xmlns="http://www.w3.org/2000/svg" height={String(height)} viewBox="0 96 960 960" width={String(width)}>
				<g transform={`translate(${translateX} ${translateY})`}>
					<path transform="translate(20, 20)" fill={fill} d={d} />
				</g>
			</svg>
		</div>
	);
};

export default IconWrapper;
