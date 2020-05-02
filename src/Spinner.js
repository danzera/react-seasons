import React from 'react';

const Spinner = props => {
	console.log(props)
	console.log(props.invertedBgColor)

	return (
		<div className="text-loader">
			<div className={`ui active ${props.invertedBgColor} dimmer`}>
				<div className={`ui ${props.size} text loader`}>{ props.spinnerText }</div>
			</div>
		</div>
	);
}

Spinner.defaultProps = {
	invertedBgColor: '', // empty => black bg, "inverted" => white bg
	size: 'large',
	spinnerText: 'Loading...'
}

export default Spinner;
