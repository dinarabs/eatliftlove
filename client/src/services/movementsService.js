const url = 'http://localhost:3000'

const getMovements = async () => {
	try {
		const data = await fetch(`${url}/movements`)
		const res = await data.json()
		return res
	} catch (error) {
		console.log('Error fetching data from getMovements:', error)
	}
}

const getMovementByName = async (name) => {
	try {
		const data = await fetch(`${url}/movement/${name}`)
		const resultFromDB = await data.json()
		console.log({ resultFromDB })
		return resultFromDB
	} catch (error) {
		console.log('Error fetching data from getMovementByName:', error)
	}
}

export { getMovementByName, getMovements }
