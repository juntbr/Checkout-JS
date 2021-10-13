import { Container } from '@material-ui/core';
import HeaderBreadcrumbs from '../components/checkout/HeaderBreadcrumbs';
import Page from '../components/Page';
import CheckoutSummary from '../components/checkout/Checkout';

export default function EcommerceCheckout() {
  return (
    <Page title="Checkout">
      <Container>
        <HeaderBreadcrumbs
          heading="Checkout"
          links={[
            { name: 'Dashboard' },
            {
              name: 'E-Commerce'
            },
            { name: 'Checkout' }
          ]}
        />
        <CheckoutSummary />
      </Container>
    </Page>
  );
}
