import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';

// Components
import Snackbar from 'material-ui/Snackbar';

const Navigation = (props) => {

    function handleRequestClose() {
        props.newError('');
    }

    return (
        <Snackbar
          open={!!props.errorMessage.length}
          message={props.errorMessage}
          autoHideDuration={4000}
          onRequestClose={handleRequestClose}
        />
    )
}

const mapStateToProps = store => ({
    errorMessage: store.state.errorMessage
})

const mapDispatchToProps = dispatch => ({
    newError: message => dispatch(actions.newError(message))
})

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);