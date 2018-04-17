import { SET_CITY } from './../actions';

export const city = (state = {}, action) => { // con state = {} le establecemos un valor por defecto
	switch	(action.type) {

		case SET_CITY:
			return action.payload;  //...state se llama spread operator

		default: 
			return state;
	}
};