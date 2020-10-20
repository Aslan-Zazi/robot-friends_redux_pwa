import React, { Component } from 'react';
import { connect } from 'react-redux';
import { errorHappened } from '../actions'

const mapStateToProps = state => {
	return {
		hasError: state.getRobots.error
	}
}

const mapDispatchToProps = dispatch => {
	return {
		setError: (text) => dispatch(errorHappened(text))
	}
}

class ErrorBoundry extends Component {
	componentDidCatch(error, info) {
		this.props.setError('text');
	}

	render() {
		if (this.props.hasError) {
			return <h1>Oooops. That is not good</h1>;
		}
		else {
			return this.props.children;
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ErrorBoundry);