import React, { createContext, useReducer } from 'react';

// ----------------------------------------------------------------------

// Initial State
const initialState = {
  checkout: []
};

const AppReducer = (state, action) => {
  switch (action.type) {
    case 'REMOVE_ITEM':
      return {
        ...state
      };
    case 'ADD_ITEM':
      return {
        ...state,
        checkout: [action.payload]
      };
    default:
      return state;
  }
};

// Create Context
const CheckoutContext = createContext({ ...initialState, addItem: () => Promise.resolve() });

// Provider Component

const CheckoutProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  const removeItem = (id) => {
    dispatch({
      type: 'REMOVE_ITEM',
      payload: id
    });
  };

  const addItem = (item) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: item
    });
  };

  return (
    <CheckoutContext.Provider
      value={{
        checkout: state.checkout,
        removeItem,
        addItem
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};

export { CheckoutContext, CheckoutProvider };
