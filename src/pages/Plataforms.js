// material
import { Container, Stack, Typography, CircularProgress } from '@mui/material';
// components
import Page from '../components/Page';
import PlatformList from '../components/Lists/PlataformList';
//
import { useFetch } from '../hooks/useFetch';
// ----------------------------------------------------------------------

export default function Platforms() {
  const URL = 'http://private-59658d-celulardireto2017.apiary-mock.com/plataformas';
  const { status, data, error } = useFetch(URL);

  if (status === 'fetching')
    return (
      <Page data-testid="fetching" title="Plataformas">
        <Stack
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh'
          }}
        >
          <CircularProgress variant="determinate" size="5%" thickness={4} value={100} />
        </Stack>
      </Page>
    );

  if (error) return <div>Algo deu errado! :(</div>;

  return (
    <Page title="Plataformas">
      <Container>
        <Stack
          direction="row"
          flexWrap="wrap-reverse"
          alignItems="center"
          justifyContent="center"
          sx={{ mb: 10 }}
        >
          <Typography data-testid="fetched" variant="h4">
            Escolha sua plataforma
          </Typography>
        </Stack>
        {data.plataformas && <PlatformList plataformas={data.plataformas} />}
      </Container>
    </Page>
  );
}
