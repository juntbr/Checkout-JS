import { useState } from 'react';
import { Icon } from '@iconify/react';
import eyeFill from '@iconify/icons-eva/eye-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
// material
import { Stack, TextField, IconButton, InputAdornment } from '@mui/material';
import { LoadingButton } from '@mui/lab';

// utils
import InputMask from 'react-input-mask';
import { useFormik, Form, FormikProvider } from 'formik';
import * as Yup from 'yup';
// hooks
import { useCheckout } from '../../hooks/useCheckout';

// ----------------------------------------------------------------------

export default function RegisterForm({ handleSubmitForm }) {
  const [showPassword, setShowPassword] = useState(false);
  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Obrigatório'),
    lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Obrigatório'),
    email: Yup.string().email('Email must be a valid email address').required('Obrigatório'),
    password: Yup.string().required('Obrigatório'),
    birthdate: Yup.string().required('Obrigatório'),
    cpf: Yup.string().required('Obrigatório')
  });

  let handleSubmitFormik = '';

  if (handleSubmitForm) handleSubmitFormik = handleSubmitForm;
  else
    handleSubmitFormik = (form) => {
      console.log({ form, checkout });
    };

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      birthdate: '',
      cpf: ''
    },
    validationSchema: RegisterSchema,
    onSubmit: (form) => handleSubmitForm(form)
  });

  const { errors, touched, handleSubmit, getFieldProps } = formik;
  const { checkout } = useCheckout();
  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <TextField
              fullWidth
              label="Primeiro nome"
              id="firstName"
              {...getFieldProps('firstName')}
              error={Boolean(touched.firstName && errors.firstName)}
              helperText={touched.firstName && errors.firstName}
            />

            <TextField
              fullWidth
              label="Segundo nome"
              id="secondName"
              {...getFieldProps('lastName')}
              error={Boolean(touched.lastName && errors.lastName)}
              helperText={touched.lastName && errors.lastName}
            />
          </Stack>

          <TextField
            fullWidth
            autoComplete="username"
            id="email"
            type="email"
            label="Email"
            {...getFieldProps('email')}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
          />

          <TextField
            fullWidth
            label="CPF"
            id="cpf"
            {...getFieldProps('cpf')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end" onClick={() => setShowPassword((prev) => !prev)}>
                    <Icon icon={showPassword ? eyeFill : eyeOffFill} />
                  </IconButton>
                </InputAdornment>
              )
            }}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
          />

          <InputMask
            mask="99/99/9999"
            {...getFieldProps('birthdate')}
            disabled={false}
            id="birthdate"
            maskChar=" "
          >
            {() => (
              <TextField
                fullWidth
                id="birthdate"
                type="text"
                {...getFieldProps('birthdate')}
                label="Data de Nascimento"
              />
            )}
          </InputMask>

          <TextField
            fullWidth
            autoComplete="current-password"
            type={showPassword ? 'text' : 'password'}
            label="Senha"
            id="password"
            {...getFieldProps('password')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end" onClick={() => setShowPassword((prev) => !prev)}>
                    <Icon icon={showPassword ? eyeFill : eyeOffFill} />
                  </IconButton>
                </InputAdornment>
              )
            }}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
          />

          <LoadingButton fullWidth size="large" type="submit" variant="contained">
            Registrar
          </LoadingButton>
        </Stack>
      </Form>
    </FormikProvider>
  );
}
