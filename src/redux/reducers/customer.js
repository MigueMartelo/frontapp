import {
	GET_CUSTOMERS,
	ADD_CUSTOMER,
	EDIT_CUSTOMER,
	DELETE_CUSTOMER,
} from '../types';

export default function (state, action) {
	switch (action.type) {
		case GET_CUSTOMERS:
			return {
				...state,
				customers: action.payload,
			};
		case ADD_CUSTOMER:
			return {
				...state,
				customers: [...state.customers, action.payload],
			};
		case EDIT_CUSTOMER:
			return {
				...state,
				customers: state.customers.map(customer =>
					customer.id === action.payload.id
						? action.payload : customer
				),
			};
		case DELETE_CUSTOMER:
			return {
				...state,
				customers: state.customers.filter(
					customer => customer.id !== action.payload
				),
			};
		default:
			return state;
	}
}
