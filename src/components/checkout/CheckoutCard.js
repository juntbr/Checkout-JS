import PropTypes from 'prop-types';
// material
import { Box, Card, Typography, Stack } from '@mui/material';

// ----------------------------------------------------------------------

CheckoutCard.propTypes = {
  plano: PropTypes.object
};

export default function CheckoutCard({ plano }) {
  const { franquia, valor } = plano;

  return (
    <Card
      sx={{
        minHeight: 304,
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Box sx={{ position: 'relative' }}>
        <Typography variant="h2" color="primary">
          R$ {valor}
        </Typography>
      </Box>

      <Stack spacing={2} sx={{ p: 3 }}>
        <Typography variant="h4" noWrap>
          {franquia}
        </Typography>

        <Typography variant="h4" noWrap>
          Apps ilimitados
        </Typography>
      </Stack>
    </Card>
  );
}
