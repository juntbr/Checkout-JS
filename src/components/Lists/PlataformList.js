import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
// material
import { Grid } from '@mui/material';
import ShopProductCard from '../Cards/PlataformCard';
// ----------------------------------------------------------------------

PlatformList.propTypes = {
  plataformas: PropTypes.array.isRequired
};

export default function PlatformList({ plataformas }) {
  const navigate = useNavigate();
  return (
    <Grid container justifyContent="center" spacing={3}>
      {plataformas &&
        plataformas.map((plataforma, index) => (
          <Grid
            key={index}
            onClick={() => navigate(`/app/planos/${plataforma.sku}`)}
            item
            xs={12}
            sm={6}
            md={3}
          >
            <ShopProductCard plataforma={plataforma} />
          </Grid>
        ))}
    </Grid>
  );
}
