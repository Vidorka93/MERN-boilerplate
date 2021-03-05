// import { useEffect, useState } from "react";
// import useFetch from "../../../../../__myModules/useFetch";
import '../../../../style.css'

const ModalPopUpComponent = ({ modalData }) => {
	let planetname;
	let tableRows;
	if (modalData !== undefined) {
		planetname = Object.keys(modalData)[0];
		// console.log("ez lefut a planet namehez");
		// console.log(modalData);
		tableRows = modalData[planetname].map((resident, index) => (
			<tr key={index+"row"}>
				<th scope="row">{resident.name}</th>
				<td key={index+"a"}>{resident.height}</td>
				<td key={index+"b"}>{resident.mass}</td>
				<td key={index+"c"}>{resident.hair_color}</td>
				<td key={index+"d"}>{resident.skin_color}</td>
				<td key={index+"e"}>{resident.eye_color}</td>
				<td key={index+"f"}>{resident.birth_year}</td>
				<td key={index+"g"}>{resident.gender}</td>
			</tr>
		));
	}

	return (
		<>
			{/* <!-- Modal --> */}
			<div
				className="modal fade"
				id="staticBackdrop"
				data-bs-backdrop="static"
				data-bs-keyboard="false"
				tabIndex="-1"
				aria-labelledby="staticBackdropLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog modal-dialog-centered modal-xl">
					<div className="modal-content bggrey">
						<div className="modal-header bggrey">
							<h5 className="modal-title bold" id="staticBackdropLabel">
								Residents of {planetname}
							</h5>
							<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div className="modal-body bggrey">
							{/*  */}
							<table  className="table table-dark table-hover">
								<thead className="table table-dark table-hover">
									<tr>
										<th scope="col bold">Name</th>
										<th scope="col bold">Height</th>
										<th scope="col bold">Mass</th>
										<th scope="col bold">Hair Color</th>
										<th scope="col bold">Skin Color</th>
										<th scope="col bold">Eye Color</th>
										<th scope="col bold">Birth Year</th>
										<th scope="col bold">Gender</th>
									</tr>
								</thead>
								<tbody>{tableRows}</tbody>
							</table>
						</div>
						<div className="modal-footer bggrey">
							<button type="button" className="btn btn-warning" data-bs-dismiss="modal">
								Close
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ModalPopUpComponent;
