import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';

// Components
import {Tabs, Tab} from 'material-ui/Tabs';

// Functions
import roverAPI from '../../utl/rover-api.js';

const Navigation = (props) => {

    function handleSelect(rover) {
        props.newRover(rover)
        props.storeImages({photos: []});

        const { date, camera } = props;

        fetch(roverAPI.apiUrl(rover, date, camera))
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

    return (
        <Tabs onChange={handleSelect}>
            <Tab label="Curiosity" value="curiosity"></Tab>
            <Tab label="Opportunity" value="opportunity"></Tab>
            <Tab label="Spirit" value="spirit"></Tab>
        </Tabs>
    )
}

const mapStateToProps = store => ({
    date: store.state.date,
    camera: store.state.camera
})

const mapDispatchToProps = dispatch => ({
    newRover: name => dispatch(actions.newRover(name)),
    storeImages: images => dispatch(actions.storeImages(images)),
    newError: message => dispatch(actions.newError(message))
})

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);