import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';

// Components
import Navigation from './navigation';
import Options from './options';
import Details from './details';
import ErrorBar from './error-bar';

// Functions
import roverAPI from '../utl/rover-api.js';

class Dashboard extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const { name, date, camera } = this.props;

        fetch(roverAPI.apiUrl(name, date, camera))
        .then(res => res.json())
        .then(data => {
            if (data.photos.length) {
                this.props.storeImages(data);
            } else {
                this.props.newError('Sorry No Results Found')
            }
        })
        .catch(err => console.error(err))
    }

    render() {
        return (
            <div>
                <Navigation />
                <Options />
                <Details />
                <ErrorBar />
            </div>
        )
    }
}

const mapStateToProps = store => ({
    name: store.state.name,
    date: store.state.date,
    camera: store.state.camera
})

const mapDispatchToProps = dispatch => ({
    storeImages: images => dispatch(actions.storeImages(images)),
    newError: message => dispatch(actions.newError(message))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Dashboard);