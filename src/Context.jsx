import { useContext, useReducer, useEffect, createContext } from 'react';
import reducer from './reducer.js';
import cartItems from './data.jsx';
import { getTotals } from './utils.js';

import {
	CLEAR_CART,
	REMOVE,
	INCREASE,
	DECREASE,
	LOADING,
	DISPLAY_ITEMS,
} from './actions.js';

const AppContext = createContext();

const initialState = {
	loading: false,
	cart: new Map(cartItems.map((item) => [item.id, item])),
};

export const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const { totalCost, totalAmount } = getTotals(state.cart);

	const clearCart = () => {
		dispatch({ type: CLEAR_CART });
	};

	const remove = (id) => {
		dispatch({ type: REMOVE, payload: { id } });
	};

	const increase = (id) => {
		dispatch({ type: INCREASE, payload: { id } });
	};

	const decrease = (id) => {
		dispatch({ type: DECREASE, payload: { id } });
	};

	return (
		<AppContext.Provider
			value={{
				...state,
				clearCart,
				remove,
				increase,
				decrease,
				totalCost,
				totalAmount,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

// eslint-disable-next-line react-refresh/only-export-components
export const useGlobalContext = () => {
	return useContext(AppContext);
};
