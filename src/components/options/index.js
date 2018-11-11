import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';

// Components
import DatePicker from 'material-ui/DatePicker';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

// Functions
import dateConverter from '../../utl/date-converter';
import roverAPI from '../../utl/rover-api';

// Styling
import './styles.css'

const Options = (props) => {

    function handleDateChange(e, selectedDate) {
        const convertedDate = dateConverter('YYYY-MM-DD', selectedDate);
        props.newDate(convertedDate);
    }

    function handleCameraChange(e, i, camera) {
        props.newCamera(camera);
    }

    function handleSubmit() {
        const { name, date, camera } = props;

        fetch(roverAPI.apiUrl(name, date, camera))
            .then(res => res.json())
            .then(data => {
                if (data.photos.length) {
                    props.storeImages(data);
                } else {
                    props.newError('Sorry No Results Found')
                }
            })
            .catch(err => console.error(err))
    }

    function roverCameraOptions() {
        return props.cameraOptions.map(item => {
            return <MenuItem key={item.ref} value={item.ref} primaryText={item.name} />
        })
    }

    return (
        <div className="options_container">
            <DatePicker hintText={props.date} onChange={handleDateChange} />
            <DropDownMenu value={props.camera} onChange={handleCameraChange}>
                { roverCameraOptions() }
            </DropDownMenu>
            <RaisedButton label="Submit" primary={true} onClick={handleSubmit}/>
        </div>
    )
}

const mapStateToProps = store => ({
    name: store.state.name,
    date: store.state.date,
    cameraOptions: store.state.cameraOptions,
    camera: store.state.camera
})

const mapDispatchToProps = dispatch => ({
    newDate: date => dispatch(actions.newDate(date)),
    newCamera: camera => dispatch(actions.newCamera(camera)),
    storeImages: images => dispatch(actions.storeImages(images)),
    newError: message => dispatch(actions.newError(message))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Options);