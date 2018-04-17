import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getForecastDataFromCities, getCity } from './../reducers'
import ForecastExtended from './../components/ForecastExtended';

class ForecastExtendedContainer extends Component {  //es un container porque tiene la funcion conect y tiene acceso al estado de la app

	render() {
		const { city, forecastData } = this.props;
		return (
			city && 
			<ForecastExtended city={city} forecastData={forecastData}/>
		);
	}
}

ForecastExtendedContainer.propTypes = {
	city: PropTypes.string.isRequired,
	forecastData: PropTypes.array,
};

const mapStateToProps = state => ({ city: getCity(state), forecastData: getForecastDataFromCities(state) }); //es lo mismo que-> const mapStateToProps = state => ({ city: state.city}); 

export default connect(mapStateToProps, null)(ForecastExtendedContainer);