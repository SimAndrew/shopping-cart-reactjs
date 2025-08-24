import { useContext, useReducer, useEffect, createContext } from 'react';
import reducer from './reducer.js';

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
	cart: [],
};

export const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};
