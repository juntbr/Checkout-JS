import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// material
import { Box, Card, Link, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

// images
import tablet from '../../assets/tablet.jpeg';
import wifi from '../../assets/wifi.jpeg';
import computer from '../../assets/computer.jpeg';

// ----------------------------------------------------------------------

const ProductImgStyle = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute'
});

// ----------------------------------------------------------------------

PlataformShopCard.propTypes = {
  plataforma: PropTypes.object
};

export default function PlataformShopCard({ plataforma }) {
  const { nome, descricao } = plataforma;
  let img = '';

  if (nome === 'Tablet') img = tablet;
  else if (nome === 'WI-FI') img = wifi;
  else img = computer;

  return (
    <Card sx={{ minHeight: 404 }}>
      <Box sx={{ pt: '100%', position: 'relative' }}>
        <ProductImgStyle alt={nome} src={img} />
      </Box>

      <Stack spacing={2} sx={{ p: 3 }}>
        <Link to="#" color="inherit" underline="hover" component={RouterLink}>
          <Typography variant="subtitle2" noWrap>
            {nome}
          </Typography>
        </Link>

        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="overline">{descricao}</Typography>
        </Stack>
      </Stack>
    </Card>
  );
}
