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

const url = 'https://www.course-api.com/react-useReducer-cart-project';

const AppContext = createContext();

const initialState = {
	loading: true,
	cart: new Map(),
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

	const fetchData = async () => {
		dispatch({ type: LOADING });
		const response = await fetch(url);
		const cart = await response.json();
		dispatch({ type: DISPLAY_ITEMS, payload: { cart } });
	};

	useEffect(() => {
		fetchData();
	}, []);

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
