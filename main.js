/*Getting the API setup*/
window.addEventListener("load", (event) => {
	const request_params = window.location.search;
	getLocationData(request_params);
	renderData();
});

async function getLocationData(params){
	const location_field = document.getElementById('resultsArea');
	const crime_field = document.getElementById('crimeRate');
	const pop_field = document.getElementById('resultsAmount');
	const education_field = document.getElementById('resultsEducation');

	const url = 'https://find-places-to-live.p.rapidapi.com/placesToLive'+params;
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'f653313567msh32357d701af50a2p1134e0jsnbce2acb2327e',
			'X-RapidAPI-Host': 'find-places-to-live.p.rapidapi.com'
		}
	};
	
	try{
		const response = await fetch(url, options);
		const result = await response.json();
		console.log(result);
		/*Subscription to 'Find Places to Live' Api no longer works despite multiple efforts
	so commenting out what values should have returned.*/
		location_field.value = result.message; /*result.Population.value;*/
		crime_field.value = result.message;/*result.Crime & Safety.description;*/
		pop_field.value = result.message;/*result.MedianRent.value;*/
		education_field.value = result.message;/*result.schools.PublicSchools;*/
	} catch {
		console.error(error);
	}
}
