import { API_URL } from '../constants'

const yieldsDayService = () => {
  return {
    getYieldDay: async () => await (await fetch(`${API_URL}/api/yields/10-01-20`)).json()
  }
}

export default yieldsDayService();