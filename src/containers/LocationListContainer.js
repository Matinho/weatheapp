import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from './../actions'; //todo lo que este en actions va a ser inyectado a la variable "actions" o sea => { setSelectedCity, setWeather }
import { getWeatherCities, getCity } from './../reducers';
import LocationList from './../components/LocationList';

class LocationListContainer extends Component {  //es un container porque tiene la funcion conect y tiene acceso al estado de la app

	componentDidMount() {
		const { setWeather, setSelectedCity, cities, city } = this.props;
		setWeather(cities);
		setSelectedCity(city);
	}

	handleSelectedLocation = city => {
		this.props.setSelectedCity(city);
	}

	render() {
		return (
			<LocationList cities={this.props.citiesWeather}
    			onSelectedLocation={this.handleSelectedLocation}>
			</LocationList>	
		)
	}
}

LocationListContainer.propTypes = {
	setSelectedCity: PropTypes.func.isRequired,
	setWeather: PropTypes.func.isRequired,
	cities: PropTypes.array.isRequired,
	citiesWeather: PropTypes.array,
	city: PropTypes.string.isRequired,
};

//se puede hacer de las dos formas
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);
/*
const mapDispatchToProps = dispatch => ({
	setCity: value => dispatch(setSelectedCity(value)),
	setWeather: cities => dispatch(setWeather(cities))
});
*/

const mapStateToProps = state => ({
	citiesWeather: getWeatherCities(state),
	city: getCity(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(LocationListContainer);