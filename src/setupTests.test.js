import '@testing-library/jest-dom/extend-expect';
import { render, screen, cleanup } from '@testing-library/react';
import App from './App';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { CheckoutProvider } from './contexts/checkoutContext';
import userEvent from '@testing-library/user-event';

import '@testing-library/jest-dom';
afterEach(cleanup);

// mocking setup

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

jest.mock('./hooks/useFetch', () => ({
  useFetch: () => ({
    data: {
      plataformas,
      planos
    },
    status: 'fetched'
  })
}));

describe('Check if app render correctly', () => {
  test('Should render first screen', () => {
    render(
      <CheckoutProvider>
        <HelmetProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </HelmetProvider>
      </CheckoutProvider>
    );
    expect(screen.getByText('Escolha sua plataforma')).toBeInTheDocument();
    plataformas.forEach((plataforma) =>
      expect(screen.getByText(plataforma.nome)).toBeInTheDocument()
    );

    const leftClick = { button: 0 };
    userEvent.click(screen.getByText(/Tablet/i), leftClick);
    expect(screen.getByText(/Escolha seu plano/i)).toBeInTheDocument();
    planos.forEach((plano) => {
      expect(screen.getByText(plano.franquia)).toBeInTheDocument();
      expect(screen.getByText('R$ ' + plano.valor)).toBeInTheDocument();
    });
  });
});
