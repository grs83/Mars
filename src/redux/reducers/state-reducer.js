import dateConverter from '../../utl/date-converter';
import roverOptions from '../../utl/rover-options';

//Current day photos are not available, so default is set to -1 day.
function currentDayMinusOne() {
    let date = dateConverter('YYYY-MM-DD');
    let dateParts = date.split('-');
    dateParts[2]--;
    return date = dateParts.join('-');
}

const initialState = {
    date: currentDayMinusOne(),
    name: 'curiosity',
    cameraOptions: roverOptions('curiosity'),
    camera: 'FHAZ',
    errorMessage: ''
};

const roverReducer = (state = initialState, action) => {
    switch (action.type) { 
        case 'newDate':
        return {
            ...state,
            date: action.payload
        }
    
    case 'newRover':
        const name = action.payload;
        const cameraOptions = roverOptions(name);
        let camera = state.camera;

        const cameraMatch = cameraOptions.filter(camera => camera.ref === state.camera);
        if (!cameraMatch.length) {
            camera = 'FHAZ';
        }

        return {
            ...state,
            name,
            cameraOptions,
            camera
        }
    
    case 'newCamera':
        return {
            ...state,
            camera: action.payload
        }

        case 'newError':
            return {
                ...state,
                errorMessage: action.payload
            }
  
        default:
            return state;
    }
  };
  
  export default roverReducer;