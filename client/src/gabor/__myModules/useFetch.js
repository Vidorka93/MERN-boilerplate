/**
 * Async Fetch:
 *
 * @param "url: where to go and GET.."
 * @returns "The fetched data in JSON"
 */

import { useEffect, useState } from "react";

let useFetch = (url) => {
	//
	let [data, setData] = useState([]);
	let [status, setStatus] = useState("Not started!");

	useEffect(() => {
		if (!url) {
			return;
		}

		let fetchedData = async () => {
			setStatus("Loading..");
			const response = await fetch(url);
			const data = await response.json();
			//
			setData(data);
			setStatus("Done..");
		};

		//
		fetchedData();
	}, [url]);

	return { data, status };
};

export default useFetch;
