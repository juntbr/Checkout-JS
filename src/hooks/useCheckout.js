import { useContext } from 'react';
import { CheckoutContext } from '../contexts/checkoutContext';

// ----------------------------------------------------------------------

export const useCheckout = () => useContext(CheckoutContext);
