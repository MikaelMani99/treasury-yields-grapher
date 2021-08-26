import { API_URL } from '../constants'

const imageService = () => {
  return {
    getImages: () => fetch(`${API_URL}/api/graphs/dateurl/02-01-90`, { 
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(i => i.json()).then(i => i)
  }
}

export default imageService();