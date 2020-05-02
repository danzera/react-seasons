import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
	// constructor function (optional), not React-specific
	// called before anything else and is one method of initializing state
	constructor(props) {
		// super() must be initially called with props for all class based components to call parent constructor
		// app will bomb out if super() is not called
		super(props);

		// initialize state object with default values
		this.state = {
			errorMessage: '',
			latitude: null
		};

		// make async call to browser geolocation API
		window.navigator.geolocation.getCurrentPosition(
			// success callback
			position => {
				// call setState function when you want to UPDATE state
				// pass in an object to that function with the key-values that you want to update
				this.setState({ latitude: position.coords.latitude });
			},
			// error callback
			err => {
				this.setState({ errorMessage: err.message });
			}
		);
	}

	// render function must be defined and return JSX
	render() {
		// conditional rendering - return variable JSX based on the state of...state
		if (this.state.errorMessage && !this.state.latitude) {
			return (
				<div>
					Error: { this.state.errorMessage }
				</div>
			);
		}
		
		if (!this.state.errorMessage && this.state.latitude) {
			return (
				<div>
					Latitude: { this.state.latitude }
				</div>
			);
		}

		// default return
		return (
			<div>
				Loading
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('#root'));
