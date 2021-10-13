// material
import { styled } from '@mui/material/styles';
import { Box, Card, Link, Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import { MHidden } from '../components/@material-extend';
import { RegisterForm } from '../components/register';
import CheckoutSummary from '../components/checkout/CheckoutSummary';
// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex'
  }
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 464,
  display: 'flex',
  textAlign: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: theme.spacing(2, 0, 2, 2),
  height: 830,
  marginTop: -40,
  position: 'fixed'
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(12, 0)
}));

// ----------------------------------------------------------------------

export default function Register() {
  return (
    <RootStyle title="Registro">
      <MHidden width="mdDown">
        <SectionStyle>
          <CheckoutSummary />
        </SectionStyle>
      </MHidden>

      <Container>
        <ContentStyle>
          <Box sx={{ mb: 5 }}>
            <Typography variant="h4" gutterBottom>
              Faça seu cadastro para finalizar!
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              Você só está há um passo de finalizar seu pedido =)
            </Typography>
          </Box>

          <RegisterForm />

          <Typography variant="body2" align="center" sx={{ color: 'text.secondary', mt: 3 }}>
            Ao se registrar, você concorda que gostou do app &nbsp;
            <Link
              underline="always"
              href="https://github.com/alliedbr/teste-front/pull/12/files"
              sx={{ color: 'text.primary' }}
            >
              Termos e Serviços
            </Link>
          </Typography>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
