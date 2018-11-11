const initialState = {
    images: [],
    selectedImage: {}
};

const roverReducer = (state = initialState, action) => {
    switch (action.type) { 
        case 'storeImages':
            let selectedImage;
            
            if (action.payload.photos.length) {
                selectedImage = action.payload.photos[0]
            } else {
                selectedImage = {}
            }

            return {
                ...state,
                images: action.payload.photos,
                selectedImage
            }

        case 'selectImage':
            const image = state.images.filter(img => img.id == action.payload)
            return {
                ...state,
                selectedImage: image[0]
            }
  
        default:
            return state;
    }
  };
  
  export default roverReducer;