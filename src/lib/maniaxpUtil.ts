export const getManiaxp = async (user: string) => {
	let fetchedResults: any[] = [];

	let response = new Response();
	let json = [];

	try {
		do {
			response = await fetch(
				'https://smx.573.no/api/scores?' +
					new URLSearchParams({
						user: user,
						best_per_chart_per_user: '1',
						skip: fetchedResults.length.toString()
					}).toString(),
				{ method: 'GET' }
			);

			if (response.ok) {
				json = await response.json();
				if (Array.isArray(json)) {
					fetchedResults = fetchedResults.concat(json);
				}
			}
		} while (fetchedResults.length % 100 == 0 && json.length != 0 && response.ok); // Results are paginated by 100s. We iterate through until we reach all results.
	} catch (e) {
		console.error('Failed to pull scores.');
		console.error(e);
	}

	const rankingPoints = fetchedResults.map((scoreData) => {
		const score = scoreData.score;
		const difficulty = scoreData.chart.difficulty;
		const rankingPoints = Math.floor((+score * Math.pow(+difficulty, 2)) / 1000);
		return rankingPoints;
	});

	rankingPoints.sort((a, b) => b - a);

	const top50 = rankingPoints.slice(0, 50);

	const top50Sum = top50.reduce((partialSum, a) => partialSum + a, 0);

	const smxForce = (top50Sum / 100000).toFixed(2);

	return +smxForce;
};
