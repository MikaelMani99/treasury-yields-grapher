import { GET_YIELDS_DAY } from '../../constants'
import yieldsDayService from '../../services/yieldsDayService'
import toastr from 'toastr';

export const getYieldsDay = () => async (dispatch) => {
  try {
    const yieldsDay = await yieldsDayService.getYieldDay()
    dispatch(getYieldsDaySuccess(yieldsDay))
  } catch (err) {
    toastr.error('Bad request, please try loading again.')
  }
}

const getYieldsDaySuccess = (yieldsDay) => ({
  type: GET_YIELDS_DAY,
  payload: yieldsDay
})