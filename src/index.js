import React from 'react';
import ReactDOM from 'react-dom';
import Spinner from './Spinner';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
	// can omit the constructor function and initialize state like so
	// Babel handles implementation of constructor function for us
	state = {
		errorMessage: '',
		latitude: null
	};

	// life-cycle method run ONCE after the component is initially rendered
	// conventionally this is where initial data loading is done
	componentDidMount() {
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

	// factor out conditional logic from the render() function
	// prefer not to have such logic there to make the component more flexible
	renderContent() {
		// conditional rendering - return variable JSX based on the state of...state
		if (this.state.errorMessage && !this.state.latitude) {
			return (
				<div>
					Error: { this.state.errorMessage }
				</div>
			);
		}
		
		if (!this.state.errorMessage && this.state.latitude) {
			// taking state from this component and passing it down to a child component as a prop
			return <SeasonDisplay latitude={ this.state.latitude } />;
		}

		// default return
		return (
			<Spinner spinnerText="Please accept location request..." size="huge" />
		);
	}

	// life-cycle method run EVERY TIME a component is updated (e.g. state changes, new props passed in from parent)
	// componentDidUpdate() {	}

	// life-cycle method run when the component is about to be removed from the screen if/when there is cleanup that needs to be done
	// typically was used when React was being used with other non-React libraries
	// newer features of React have lessened the need to use this life-cycle method
	// componentWillUnmount() { }

	// render function must be defined and return JSX
	// conditional rendering logic is factored out into a separate function
	// this gives us the flexibility to wrap the conditional content in some common content and keeps our render() function cleaner
	render() {
		return (
			<div>
				{ this.renderContent() }
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('#root'));
