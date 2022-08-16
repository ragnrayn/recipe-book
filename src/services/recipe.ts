const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1b8ee7354emsh1d719be64608fa7p17a2b6jsna402a22acfae',
		'X-RapidAPI-Host': 'cooking-recipe2.p.rapidapi.com'
	}
};

export const recipeService = {
    get: async function () {

        const response = await fetch('https://cooking-recipe2.p.rapidapi.com/', options);

        const data = await response.json();

        return data;

    }
}