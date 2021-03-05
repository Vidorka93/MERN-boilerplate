import '../../../../App.css';

const NavigationButtons = ({ previous, next, loadingStatus, setNewUrl }) => {
  
	let previousClick = () => {
		//
		setNewUrl(previous);
	};
	let nextClick = () => {
		//
		setNewUrl(next);
	};

	return (
		<>
			{previous === null || loadingStatus === "Loading.." ? (
				<button onClick={previousClick} type="button" className="btn  btn-warning btn-md me-3 mb-4 gold prevnext" disabled>
					Previous
				</button>
			) : (
				<button onClick={previousClick} type="button" className="btn btn-warning btn-md me-3 mb-4 gold prevnext">
					Previous
				</button>
			)}

			{next === null || loadingStatus === "Loading.." ? (
				<button onClick={nextClick} type="button" className="btn btn-warning btn-md mb-4 gold prevnext" disabled>
					Next
				</button>
			) : (
				<button onClick={nextClick} type="button" className="btn btn-warning btn-md mb-4 gold prevnext">
					Next
				</button>
			)}
		</>
	);
};

export default NavigationButtons;
