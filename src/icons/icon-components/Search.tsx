import IconWrapper, { IIconProps } from '../IconWrapper';

export const searchPath =
	'M782 892 528 638q-29.605 27.077-69.051 41.038Q419.503 693 381 693q-91.812 0-155.406-63.337Q162 566.325 162 474.663 162 383 225.337 319.5 288.675 256 380.11 256t155.662 63.385Q600 382.769 600 474.288 600 515 585 554.5T544 622l254 253-16 17ZM381 671q83.083 0 140.042-56.5Q578 558 578 474.5t-56.958-140Q464.083 278 381 278t-140.042 56.5Q184 391 184 474.5t56.958 140Q297.917 671 381 671Z';
const Search = (props: IIconProps) => {
	return <IconWrapper {...props} d={searchPath} />;
};

export default Search;