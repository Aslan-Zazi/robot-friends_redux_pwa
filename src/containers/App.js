import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSearchField, requestRobots } from '../actions';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import Header from '../components/Header'
import './App.css';


const mapStateToProps = state => {
	return {
		searchField: state.searchRobots.searchField,
		robots: state.getRobots.robots,
		isPending: state.getRobots.isPending,
		error: state.getRobots.error
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequsetRobots: () => dispatch(requestRobots())
	}
}

class App extends Component {
	componentDidMount() {
		this.props.onRequsetRobots();
	}

	render() {
		const { searchField, onSearchChange, robots, isPending } = this.props;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		});
		return isPending ? <h1>Loading</h1> :
			(
				<div className='tc'>
					<Header />
					<SearchBox searchChange={onSearchChange} />
					<Scroll>
						<ErrorBoundry>
							<CardList robots={filteredRobots} />
						</ErrorBoundry>
					</Scroll>
				</div>
			);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);