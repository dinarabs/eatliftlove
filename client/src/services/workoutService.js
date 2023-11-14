const url = 'http://localhost:3000'

const getWODs = async () => {
	try {
		const data = await fetch(`${url}/workouts`)
		return await data.json()
	} catch (error) {
		console.log('Error fetching data from getWorkouts:', error)
	}
}

export default getWODs
