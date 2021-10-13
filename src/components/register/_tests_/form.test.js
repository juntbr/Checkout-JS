import '@testing-library/jest-dom/extend-expect';
import { render, screen, cleanup , waitFor} from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';

//components
import RegisterForm from '../RegisterForm';

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

test('Rendering and submitting a Formik form ', async () => {
  const handleSubmit = jest.fn();
  render(<RegisterForm handleSubmitForm={handleSubmit} />);

  userEvent.type(screen.getByLabelText(/primeiro nome/i), 'John');
  userEvent.type(screen.getByLabelText(/segundo nome/i), 'Dee');
  userEvent.type(screen.getByLabelText(/email/i), 'john.dee@someemail.com');
  userEvent.type(screen.getByLabelText(/Data de nascimento/i), '28/10/1999');
  userEvent.type(screen.getByLabelText(/senha/i), '12345');
  userEvent.type(screen.getByLabelText(/cpf/i), '12345');
  userEvent.click(screen.getByRole('button', { name: /registrar/i }));

  await waitFor(() =>
    expect(handleSubmit).toHaveBeenCalledWith({
      email: 'john.dee@someemail.com',
      firstName: 'John',
      lastName: 'Dee',
      birthdate: '28/10/1999',
      password: '12345',
      cpf: '12345'
    })
  );
});
