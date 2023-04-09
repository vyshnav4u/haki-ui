import DropDown from './ui/form/DropDown/DropDown';

function App() {
	const options = [
		{ label: 'One', value: 'One' },
		{ label: 'Two', value: 'two' },
		{ label: 'Three', value: '3' },
		{ label: 'Four', value: '4' },
	];
	return (
		<div className="main">
			Hello Welcome
			<div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-around' }}>
				<div>
					<DropDown showSearchIcon enableSearch showCheckMarkOnSelection options={options} selectedValue="two" />
					start
				</div>
				<div> start</div>
				<div> start</div>
			</div>
		</div>
	);
}

export default App;
