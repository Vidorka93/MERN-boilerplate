
import { useEffect } from "react";
import '../../style.css'

const TableRowComponent = ({ planetsData, loadingStatus, setModalData, residents, setMultiLinks }) => {
	// get the links for the modals datas fetch
	let links = [];

	useEffect(() => {
		if (loadingStatus !== "Done..") {
			return;
		} else {
			setMultiLinks([]);
			setMultiLinks(links);
		}
		// }, [loadingStatus]);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [loadingStatus]);

	// converting population
	let convertPop = (data) => {
		if (isNaN(data)) {
			return data;
		} else {
			let formatted = new Intl.NumberFormat("en-US");
			return formatted.format(data);
		}
	};

	let residentsClickHandler = (residentsIndex, planetname) => {
		// index of the residents array
		setModalData({ [planetname]: residents[residentsIndex] });
	};

	if (loadingStatus === "Done..") {
		let planets = planetsData.results.map((planet, index) => {
			links.push(planet.residents);
			return (
				<tr key={index + "row"}>
					<th scope="row">{index}</th>
					<td>{planet.name}</td>
					<td>{planet.diameter} km</td>
					<td>{planet.climate}</td>
					<td>{planet.surface_water !== "unknown" ? planet.surface_water + " %" : planet.surface_water}</td>
					<td>{convertPop(planet.population)}</td>
					<td>
						{planet.residents.length !== 0 ? (
							<button
								onClick={() => residentsClickHandler(index, planet.name)}
								type="button"
								className="btn btn-warning gold shadow-none residents"
								data-bs-toggle="modal"
								data-bs-target="#staticBackdrop"
							>
								{planet.residents.length} Residents
							</button>
						) : (
							"No know residents"
						)}
					</td>
				</tr>
			);
		});

		return <>{planets}</>;
	}

	return (
		<>
			<tr className="spinner-border text-warning" role="status" />
		</>
	);
};

export default TableRowComponent;
