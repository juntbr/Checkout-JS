import { Icon } from '@iconify/react';
import editFill from '@iconify/icons-eva/edit-fill';
// material
import {
  Box,
  Card,
  Stack,
  Button,
  Divider,
  TextField,
  CardHeader,
  Typography,
  CardContent,
  InputAdornment
} from '@material-ui/core';
// hooks
import { useState } from 'react';
import { useCheckout } from '../../hooks/useCheckout';
// ----------------------------------------------------------------------

export default function CheckoutSummary() {
  const fCurrency = (x) => x;
  const [discount, setDiscount] = useState(0);
  const { checkout } = useCheckout();
  let value = 0;
  if (checkout[0]) value = parseFloat(checkout[0].valor);

  return (
    <Card sx={{ mb: 3 }}>
      <CardHeader
        title="Seu pedido"
        action={
          <Button size="small" type="button" startIcon={<Icon icon={editFill} />}>
            Edit
          </Button>
        }
      />

      <CardContent>
        <Stack spacing={2}>
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Total
            </Typography>
            <Typography variant="subtitle2">R${value}</Typography>
          </Stack>

          <Stack direction="row" justifyContent="space-between">
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Discount
            </Typography>
            <Typography variant="subtitle2">R$ {fCurrency(discount)}</Typography>
          </Stack>

          <Stack direction="row" justifyContent="space-between">
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Valor final
            </Typography>
            <Typography variant="subtitle2">R$ {value - discount}</Typography>
          </Stack>

          <Divider />

          <Stack direction="row" justifyContent="space-between">
            <Typography variant="subtitle1">Total</Typography>
            <Box sx={{ textAlign: 'right' }}>
              <Typography variant="subtitle1" sx={{ color: 'error.main' }}>
                R$ {value - discount}
              </Typography>
              <Typography variant="caption" sx={{ fontStyle: 'italic' }}>
                (VAT included if applicable)
              </Typography>
            </Box>
          </Stack>

          <TextField
            fullWidth
            placeholder="Discount codes / Gifts"
            value="ALLIED10"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Button type="button" onClick={() => setDiscount(0.1 * value)}>
                    Apply
                  </Button>
                </InputAdornment>
              )
            }}
          />
        </Stack>
      </CardContent>
    </Card>
  );
}
