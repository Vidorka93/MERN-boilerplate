import { useState } from "react";
import NavigationButtons from "./NavigationButtons/NavigationButtons.component";
import TableHeadComponent from "./TableHeadComponent/TableHead.component";
import ModalPopUpComponent from "./TableRowComponent/ModalComponent/ModalPopUpComponent/ModalPopUp.component";
import TableRowComponent from "./TableRowComponent/TableRow.component";

const FirstPageComponent = ({ planetsData, loadingStatus, setNewUrl, residents, setMultiLinks }) => {

	// state, amivel a modalnak átadom a linket, amikor a gombon
	// megtörténik a klikk
	let [ modalData, setModalData ] = useState();

	return (
		<div className="container">
			<NavigationButtons previous={planetsData.previous} next={planetsData.next} loadingStatus={loadingStatus} setNewUrl={setNewUrl} />
			
			<ModalPopUpComponent modalData={modalData}/>
			<table className="table table-dark table-hover">
				<TableHeadComponent />
				<tbody>
					<TableRowComponent planetsData={planetsData} loadingStatus={loadingStatus} setModalData={setModalData} residents={residents} setMultiLinks={setMultiLinks}/>
				</tbody>
			</table>
		</div>
	);
};

export default FirstPageComponent;
