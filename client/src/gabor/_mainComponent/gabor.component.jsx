/**
 * Ez lesz Gábor belépő komponense, innen fog mindent az App.js-be tenni
 *
 * @param "NO PARAM YET!!"
 * @return "ALL OF MY COMPIES :)"
 * */

import "./style.css";

import useFetch from "../__myModules/useFetch";
import FirstPageComponent from "./FirstPageComponent/FirstPage.component";
import { useEffect, useState } from "react";
import useMultiFetch from "../__myModules/useMultiFetch";

// First url:
let planetsURL = "http://swapi.dev/api/planets/";

const GaborMainComponent = () => {
	let [url, setURL] = useState(planetsURL);
	let { data, status } = useFetch(url);

	let [multiLinks, setMultiLinks] = useState([]);
	let [residents, setResidents] = useMultiFetch(multiLinks);

	useEffect(() => {
		if (multiLinks.length === 0) return;
		setResidents([]);
	// }, [multiLinks]);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [multiLinks]);

	return (
		<div className="test-main-wrapper">
			<h2>Star Wars universe planets</h2>
			<FirstPageComponent
				setResidents={setResidents}
				planetsData={data}
				loadingStatus={status}
				setNewUrl={setURL}
				residents={residents}
				setMultiLinks={setMultiLinks}
			/>
		</div>
	);
};

export default GaborMainComponent;
