import axios from 'axios'

const ACCESS_KEY = '69w6caGAvP3uEzcGq5eWDU4w5eT7cTDWCEtnwi9m9lA'
const UNSPLASH_URL = 'https://api.unsplash.com'

const fetchImages = async (query) => {
	try {
		const url = `${UNSPLASH_URL}/search/photos/`
		const response = await axios.get(url, {
			params: { query: query, client_id: ACCESS_KEY },
		})
		return response.data.results
	} catch (error) {
		console.log('Error fetching images from Unsplash:', error)
		return []
	}
}

export default fetchImages
