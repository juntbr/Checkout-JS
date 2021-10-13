import { Grid, Card, Button, CardHeader, Typography } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { useCheckout } from '../../hooks/useCheckout';
import CheckoutCard from './CheckoutCard';
import CheckoutSummary from './CheckoutSummary';

export default () => {
  const { checkout, removeItem } = useCheckout();
  const navigate = useNavigate();
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8}>
        <Card sx={{ mb: 3 }}>
          <CardHeader title={<Typography variant="h6">Seu carrinho</Typography>} sx={{ mb: 3 }} />
          <div style={{ mb: 3, display: 'flex', flexDirection: 'column' }}>
            {checkout &&
              checkout.map((plano, index) => (
                <CheckoutCard key={index} plano={plano} onClick={() => removeItem(index)} />
              ))}
          </div>
        </Card>

        <Button color="inherit">Voltar</Button>
      </Grid>

      <Grid item xs={12} md={4}>
        <CheckoutSummary checkout={checkout} />
        <Button
          fullWidth
          size="large"
          type="submit"
          onClick={() => navigate('/app/register')}
          variant="contained"
        >
          Comprar
        </Button>
      </Grid>
    </Grid>
  );
};
