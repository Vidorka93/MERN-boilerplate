import { useEffect, useState } from "react";

let useMultiFetch = (arrayOfPlanets) => {
	// A végső tömb amit majd visszaadok
	let [residentsArray, setResidentsArray] = useState([]);

	useEffect(() => {
		// a linkek tömbjének az ellenörzése, hogy ne fetcheljen feleslegesen illetve ha már megvan a tömb
		if (arrayOfPlanets === undefined || arrayOfPlanets.length === 0 || residentsArray.length !== 0) return;

		// Felkészülés az adatok feldolgozására:
		let fullResidents = [];

		// fetchelni a lakókat és kimenteni az adataikat
		for (let planet in arrayOfPlanets) {
			// egy tömb, amibe minden lakó adatait teszem
			let temporaryPlanet = [];
			// ha a tömbben nincs link, vagyis a rezidensek "unknown"
			if (arrayOfPlanets[planet].length === 0) {
				fullResidents.push(temporaryPlanet);
				continue;
			} else {
				arrayOfPlanets[planet].forEach((link) => {
					fetch(link)
						.then((response) => response.json())
						.then((data) => {
							let newPerson = {
								name: data.name,
								height: data.height,
								mass: data.mass,
								hair_color: data.hair_color,
								skin_color: data.skin_color,
								eye_color: data.eye_color,
								birth_year: data.birth_year,
								gender: data.gender,
							};
							// személy az átmeneti tömbbe
							temporaryPlanet.push(newPerson);
						});
					// loopon belüli fetch vége
				});
				// az átmeni tömb a végső tömbbe
				fullResidents.push(temporaryPlanet);
				//
			}
		}

		// console.log(fullResidents);

		setResidentsArray(fullResidents);

		// végső műveletek
	}, [arrayOfPlanets, residentsArray]);

	return [residentsArray, setResidentsArray];
};

export default useMultiFetch;
