import { API_URL } from '../constants'

const yieldsDayService = () => {
  return {
    getYieldDay: async (date) => await (await fetch(`${API_URL}/api/yields/${date}?format=yyyy-MM-dd`))
  }
}

export default yieldsDayService();