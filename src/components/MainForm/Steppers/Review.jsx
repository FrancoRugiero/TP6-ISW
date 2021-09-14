import React from 'react';
import { Typography, Grid,InputLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: theme.spacing(2),
  },
}));

const Review = ({ orderData, amount}) => {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h5" gutterBottom>
        Resumen del pedido
      </Typography>
        <Typography variant="h6" gutterBottom className={classes.title}>
            Productos en Carrito
          </Typography>
          <Typography gutterBottom>
          {orderData.carrito.map((carr) => (
              <InputLabel value={carr}>{carr}</InputLabel>
            ))}
          </Typography>
          <Typography variant="h7" gutterBottom className={classes.title}>
           Total a pagar: ${orderData.precioAcumulado+orderData.precioServicio}
        </Typography>
      <Typography gutterBottom></Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Dirección de entrega
          </Typography>
          <Typography gutterBottom>
            {`${orderData.addressDelivery} ${orderData.numberDelivery} - ${orderData.cityDelivery}`}
          </Typography>
          {orderData.referenceDelivery && (
            <Typography gutterBottom>
              {`Datos de referencia: ${orderData.referenceDelivery}`}
            </Typography>
          )}
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Tipo de entrega
          </Typography>
          {orderData.immediately ? (
            <Typography gutterBottom>Lo antes Posible</Typography>
          ) : (
            <>
              <Typography gutterBottom>Programada</Typography>
              <Typography gutterBottom>
                {`Fecha y hora de entrega: ${orderData.date.toLocaleString('es-AR')}`}
              </Typography>
            </>
          )}
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Método de Pago
          </Typography>
          {orderData.cash ? (
            <>
            <Typography gutterBottom>{`Efectivo: $${amount}`}</Typography>
            <Typography gutterBottom>{`Vuelto: $${amount - (orderData.precioAcumulado+orderData.precioServicio)}`}</Typography>
            </>
          ) : (
            <>
              <Typography gutterBottom>Tarjeta de Crédito Visa</Typography>
              <Typography gutterBottom>{`Titular: ${orderData.cardName}`}</Typography>
              <Typography gutterBottom>
                {`Número: 4XXX-XXXX-XXXX-${orderData.cardNumber.substr(
                  orderData.cardNumber.length - 4,
                )}`}
              </Typography>
              <Typography gutterBottom>{`Fecha de Vencimiento: ${orderData.expDate}`}</Typography>
            </>
          )}
        </Grid>
      </Grid>
    </>
  );
};

Review.propTypes = {
  orderData: PropTypes.object.isRequired,
};

export default Review;
