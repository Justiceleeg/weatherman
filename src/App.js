import React, { Component } from "react";
import { connect } from "react-redux";

import "./App.css";

import hourglass from "./assets/hourglass.svg";

import { reset } from "./ducks/weather";

import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import EnterLocation from "./components/EnterLocation/EnterLocation";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";

class App extends Component {

	renderChildren() {
	// 	{
    //     error: false,
    //     loading: false,
    //     search: false,
    //     weather: action.payload
    //   };
		if ( this.props.error ) {
			return	<ErrorMessage />;
		} else if (this.props.loading) {
			return <img src={hourglass} />
		} else if ( this.props.search ) {
			return	<EnterLocation />;			
		} else if ( this.props.weather) {
			return	<CurrentWeather weather={this.props.weather} reset={this.props.reset}/>;
		} else {
			return <div>Something went wrong </div>
		}

	}

	render() {

		return (
			<div className="app">
				<h1 className="app__title">WEATHERMAN</h1>
				{
					this.renderChildren()
				}
			</div>
		);
	}
}

export default connect( state => state, { reset } )( App );
