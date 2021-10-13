import PropTypes from 'prop-types';
// material
import { Box, Card, Typography, Stack, Button } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
// utils

// ----------------------------------------------------------------------

PlanosCard.propTypes = {
  plano: PropTypes.object,
  value: PropTypes.number
};

function PlanCircularProgress(props) {
  return (
    <Box sx={{ position: 'relative', marginTop: 5 }}>
      <CircularProgress
        variant="determinate"
        sx={{
          color: (theme) => theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800]
        }}
        size={80}
        thickness={4}
        {...props}
        value={100}
      />
      <CircularProgress
        variant="determinate"
        sx={{
          color: (theme) => theme.palette.primary,
          animationDuration: '550ms',
          position: 'absolute',
          left: 0
        }}
        size={80}
        thickness={4}
        {...props}
      />
    </Box>
  );
}

export default function PlanosCard({ plano, value, ...props }) {
  const { franquia, valor, ativo } = plano;

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
      <PlanCircularProgress value={value} />
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

        <Button variant="contained" {...props} disabled={!ativo} to="#">
          Quero esse
        </Button>
      </Stack>
    </Card>
  );
}
