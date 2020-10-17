import {
	ADD_CUSTOMER,
	DELETE_CUSTOMER,
	GET_CUSTOMERS,
	EDIT_CUSTOMER,
} from '../types';

const initialState = {
	customers: [],
};

export default function (state = initialState, action) {
	switch (action.type) {
		case ADD_CUSTOMER:
			return {
				...state,
				customers: [...state.customers, action.payload],
			};
		case GET_CUSTOMERS:
			return {
				...state,
				customers: action.payload,
			};
		default:
			return state;
	}
}
