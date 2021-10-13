import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
// material
import { Grid } from '@mui/material';

// components
import PlanosCard from '../Cards/PlanosCard';

// hooks
import { useCheckout } from '../../hooks/useCheckout';

// ----------------------------------------------------------------------

PlanosList.propTypes = {
  planos: PropTypes.array.isRequired
};

export default function PlanosList({ planos }) {
  const { addItem } = useCheckout();
  const navigate = useNavigate();
  const circularProgressStart = 100 / planos.length;
  return (
    <Grid container justifyContent="center" spacing={3}>
      {planos &&
        planos.map((plano, index) => (
          <Grid key={index} item xs={12} sm={6} md={3}>
            <PlanosCard
              plano={plano}
              onClick={() => {
                addItem(plano);
                navigate('/app/checkout');
              }}
              value={circularProgressStart * (index + 1)}
            />
          </Grid>
        ))}
    </Grid>
  );
}
