import { GET_IMAGES } from '../../constants'
import imageService from '../../services/imageService'
import toastr from 'toastr';

export const getImages = () => async (dispatch) => {
  try {
    console.log("Halló í getImages")
    const images = await imageService.getImages()
    console.log(`Halló heimur í action: ${images}`)
    dispatch(getImagesSuccess(images))
  } catch (err) {
    toastr.error('Bad request, please try loading again.')
  }
}

const getImagesSuccess = (images) => ({
  type: GET_IMAGES,
  payload: images
})