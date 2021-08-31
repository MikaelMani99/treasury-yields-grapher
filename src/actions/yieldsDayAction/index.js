import { GET_YIELDS_DAY } from '../../constants'
import yieldsDayService from '../../services/yieldsDayService'
import toastr from 'toastr';

export const getYieldsDay = (date) => async (dispatch) => {
  try {
    const res = await yieldsDayService.getYieldDay(date)
    res?.status === 404 && toastr.error(`No yield for date "${date}"`)
    res?.status === 200 && dispatch(getYieldsDaySuccess(await res.json()))
  } catch (err) {
    toastr.error('Bad request, please try loading again.')
  }
}

const getYieldsDaySuccess = (yieldsDay) => ({
  type: GET_YIELDS_DAY,
  payload: yieldsDay
})