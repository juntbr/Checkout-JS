import '@testing-library/jest-dom/extend-expect';
import { render, screen, cleanup } from '@testing-library/react';
import React from 'react';

//providers
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { CheckoutProvider } from '../../../contexts/checkoutContext';

//components
import PlanosCard from '../PlanosCard';
import PlatformCard from '../PlataformCard';
import CheckoutCard from '../../checkout/CheckoutCard';

const plataform = {
  sku: 'TBT01',
  nome: 'Tablet',
  descricao: 'Chip para navegar à vontade'
};

const plano = {
  sku: 'TI00001NA_NOVA_LINHA',
  franquia: '1GB',
  valor: '21,50',
  ativo: true
};

const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return render(
    <CheckoutProvider>
      <HelmetProvider>
        <BrowserRouter>{ui}</BrowserRouter>
      </HelmetProvider>
    </CheckoutProvider>
  );
};

it('Should render PlanosCard with a Plano ', () => {
  render(<PlanosCard plano={plano} />);
  expect(screen.getByText('R$ ' + plano.valor)).toBeInTheDocument();
  expect(screen.getByText(plano.franquia)).toBeInTheDocument();
});

it('Should render Plataform Card ', () => {
  renderWithRouter(<PlatformCard plataforma={plataform} />);
  expect(screen.getByText(plataform.nome)).toBeInTheDocument();
  expect(screen.getByText(plataform.descricao)).toBeInTheDocument();
});

it('Should render Checkout Card', () => {
  renderWithRouter(<CheckoutCard plano={plano} />);
  expect(screen.getByText('R$ ' + plano.valor)).toBeInTheDocument();
  expect(screen.getByText(plano.franquia)).toBeInTheDocument();
});

