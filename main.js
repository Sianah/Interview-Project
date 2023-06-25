/*const url = 'https://find-places-to-live.p.rapidapi.com/placesToLive?place=stamford-fairfield-ct&type=%3CREQUIRED%3E';
fetch("https://find-places-to-live.p.rapidapi.com/placesToLive?place=stamford-fairfield-ct&type=%3CREQUIRED%3E");
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f653313567msh32357d701af50a2p1134e0jsnbce2acb2327e',
		'X-RapidAPI-Host': 'find-places-to-live.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}*/
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
		location_field.value = result.message;
		crime_field.value = result.message;
		pop_field.value = result.message;
		education_field.value = result.message;
	} catch {
		console.error(error);
	}
}
