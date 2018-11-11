import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';

// Component
import CircularProgress from 'material-ui/CircularProgress';

// Style
import './styles.css'

export default (WrappedComponent) => {
    const LoaderHOC = (props) => {
        return (
            props.images.length ? (
                <WrappedComponent {...props}/> 
            ) : (
                <div className='loader-wrapper'>
                    <CircularProgress size={80} thickness={5} />
                </div>
            )
        )
    }

    const mapStateToProps = store => ({
        images: store.rover.images,
        selectedImage: store.rover.selectedImage
    })

    const mapDispatchToProps = dispatch => ({
        selectImage: id => dispatch(actions.selectImage(id))
    })

    return connect(mapStateToProps, mapDispatchToProps)(LoaderHOC);
}