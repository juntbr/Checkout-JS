import { Container } from '@material-ui/core';

// components
import HeaderBreadcrumbs from '../components/checkout/HeaderBreadcrumbs';
import Page from '../components/Page';
import CheckoutSummary from '../components/checkout/Checkout';

export default function Checkout() {
  return (
    <Page title="Checkout">
      <Container>
        <HeaderBreadcrumbs heading="Checkout" />
        <CheckoutSummary />
      </Container>
    </Page>
  );
}
