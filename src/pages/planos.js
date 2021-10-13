import { useParams } from 'react-router-dom';
// material
import { Container, Stack, Typography, CircularProgress } from '@mui/material';
// components
import Page from '../components/Page';
import PlanosList from '../components/Lists/PlanosList';
// hooks
import { useFetch } from '../hooks/useFetch';
// ----------------------------------------------------------------------

export default function Planos() {
  const { id } = useParams();
  const URL = `http://private-59658d-celulardireto2017.apiary-mock.com/planos/${id}`;
  const { status, data, error } = useFetch(URL);
  if (status === 'fetching')
    return (
      <div
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}
      >
        <CircularProgress variant="determinate" sx="primary" size="5%" thickness={4} value={100} />
      </div>
    );

  if (error) return <div> Deu erro :( !</div>;
  return (
    <Page title="Planos">
      <Container>
        <Stack
          direction="row"
          flexWrap="wrap-reverse"
          alignItems="center"
          justifyContent="center"
          sx={{ mb: 10 }}
        >
          <Typography variant="h4">Escolha seu plano</Typography>
        </Stack>
        {data.planos && <PlanosList planos={data.planos} />}
      </Container>
    </Page>
  );
}
