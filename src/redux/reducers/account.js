import {
	GET_ACCOUNTS,
	ADD_ACCOUNT,
	EDIT_ACCOUNT,
	DELETE_ACCOUNT,
} from '../types';

export default function (state, action) {
	switch (action.type) {
		case GET_ACCOUNTS:
			return {
				...state,
				accounts: action.payload,
			};
		case ADD_ACCOUNT:
			return {
				...state,
				accounts: [...state.accounts, action.payload],
			};
		case EDIT_ACCOUNT:
			return {
				...state,
				accounts: state.accounts.map(account =>
					account.id === action.payload.id
						? action.payload : account
				),
			};
		case DELETE_ACCOUNT:
			return {
				...state,
				accounts: state.accounts.filter(
					account => account.id !== account.payload
				),
			};
		default:
			return state;
	}
}
