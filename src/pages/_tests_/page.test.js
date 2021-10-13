import '@testing-library/jest-dom/extend-expect';
import { render, screen, cleanup, waitFor } from '@testing-library/react';
import App from '../../App';
import React from 'react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { CheckoutProvider } from '../../contexts/checkoutContext';

//pages
import Planos from '../planos';
import Checkout from '../Checkout';
import Register from '../Register';

const plataformas = [
  {
    sku: 'TBT01',
    nome: 'Tablet',
    descricao: 'Chip para navegar à vontade'
  }
];

const planos = [
  {
    sku: 'TI00001NA_NOVA_LINHA',
    franquia: '1GB',
    valor: '21,50',
    ativo: true
  }
];

jest.mock('../../hooks/useFetch', () => ({
  useFetch: () => ({
    data: {
      plataformas,
      planos
    },
    status: 'fetched'
  })
}));

jest.mock('../../hooks/useCheckout', () => ({
  useCheckout: () => ({
    checkout: [
      {
        sku: 'TI00001NA_NOVA_LINHA',
        franquia: '1GB',
        valor: '21,50',
        ativo: true
      }
    ]
  })
}));

const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return render(
    <CheckoutProvider>
      <HelmetProvider>
        <BrowserRouter>
          <App>{ui}</App>
        </BrowserRouter>
      </HelmetProvider>
    </CheckoutProvider>
  );
};

it('Should render planos screen', () => {
  renderWithRouter(<Planos />, { route: '/app/planos/TBT01' });
  expect(screen.getByText('Escolha seu plano')).toBeInTheDocument();
  expect(screen.getByText(planos[0].franquia)).toBeInTheDocument();
});

it('Should render checkout screen', () => {
  renderWithRouter(<Checkout />, { route: '/app/checkout' });
  expect(screen.getByText('Seu carrinho')).toBeInTheDocument();
  expect(screen.getByText('R$ ' + planos[0].valor)).toBeInTheDocument();
  expect(screen.getByText(planos[0].franquia)).toBeInTheDocument();
});

it('Should render register screen', async () => {
  renderWithRouter(<Register />, { route: '/app/register' });
  expect(screen.getByText('Seu pedido')).toBeInTheDocument();
  expect(screen.getByText('R$' + parseFloat(planos[0].valor))).toBeInTheDocument();
});
