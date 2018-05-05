import actionTypes from '../constants/actionTypes'

function imagesReceived(images){
	return {
		type: actionTypes.IMAGES_RECEIVED,
		images: images
	}
}

function imagesLoading(){
	return {
		type: actionTypes.IMAGES_LOADING
	}
}

export function fetchImages(){
	return dispatch => {
		console.log('fetching images')

		return fetch(`/news`)
		.then( (response) => response.json() )
		.then( (data) => dispatch(imagesReceived(data.data)))
		.catch( (e) => console.log(e) )
	}	
}


