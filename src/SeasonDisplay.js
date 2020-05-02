import React from 'react';
// can import CSS files into our JS files
// Webpack will bundle this into our index.html file for us
import './SeasonDisplay.css';

const seasonConfig = {
	spring: {
		iconName: "leaf",
		text: "It's warming up!"
	},
	summer: {
		iconName: "sun",
		text: "Uffda, It's hot!"
	},
	autumn: {
		iconName: "cloud",
		text: "It's cooling off..."
	},
	winter: {
		iconName: "snowflake",
		text: "Brrr, it's chilly!"
	}
}

// get (estimated) current season based on the current month and the latitude returned from the user's browser
const getSeason = (latitude, month) => {
	if (latitude > 0) {
		if (month > 8) {
			return (month < 12) ? 'autumn' : 'winter';
		} else if (month > 5) {
			return 'summer';
		} else if (month > 2) {
			return 'spring';
		} else {
			return 'winter';
		}
	} else {
		if (month > 9) {
			return 'spring';
		} else if (month > 5) {
			return 'winter';
		} else if (month > 2) {
			return 'autumn';
		} else {
			return 'summer';
		}
	}
}

const SeasonDisplay = props => {
	const season = getSeason(props.latitude, new Date().getMonth());
	const { iconName, text } = seasonConfig[season];
	
	return (
		<div className={`season-display ${season}`}>
			<i className={`icon-left massive ${iconName} icon`} />
			<h1>{ text }</h1>
			<i className={`icon-right massive ${iconName} icon`} />
		</div>
	);
}

export default SeasonDisplay;
