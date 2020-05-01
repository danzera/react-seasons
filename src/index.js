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
			latitude: null
		};

		// make async call to browser geolocation service
		window.navigator.geolocation.getCurrentPosition(
			// success callback
			position => {
				// call setState function when you want to UPDATE state
				// pass in an object to that function with the key-values that you want to update
				this.setState({ latitude: position.coords.latitude });
			},
			// failure callback
			err => console.log(err)
		);
	}

	// render function must be defined and return JSX
	render() {
		return <div>Latitude: { this.state.latitude }</div>
	}
}

ReactDOM.render(<App />, document.querySelector('#root'));
