import axios from 'axios'
const UNSPLASH_URL = 'https://api.unsplash.com'

const fetchImages = async (query) => {
  try {
    const url = `${UNSPLASH_URL}/search/photos/`
    const response = await axios.get(url, {
      params: { query: query, client_id: import.meta.env.UNSPLASH_ACCESS_KEY },
    })
    return response.data.results
  } catch (error) {
    console.log('Error fetching images from Unsplash:', error)
    return []
  }
}

export default fetchImages
