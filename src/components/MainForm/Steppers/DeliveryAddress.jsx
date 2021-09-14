import React from 'react';
import {
  Typography,
  Grid,
  TextField,
  InputLabel,
  Divider,
  Select,
  MenuItem,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { DateTimePicker } from '@material-ui/pickers';
import PropTypes from 'prop-types';


export const cities = ['Córdoba','Río Ceballos', 'Río primero', 'Río segundo', 'Río tercero', 'Río cuarto', 'Villa Allende','Villa Carlos Paz','Villa General Belgrano'];

const useStyles = makeStyles((theme) => ({
  fileLabel: {
    marginBottom: theme.spacing(1),
  },
  divider: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
  },
}));

const DeliveryAddress = ({orderData,handleChange,setFieldValue,touched,errors}) => {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h6" style={{ marginTop: 10 }} gutterBottom>
        Dirección de Entrega
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            id="cityDelivery"
            select
            label="Ciudad"
            name="cityDelivery"
            error={touched.cityDelivery && Boolean(errors.cityDelivery)}
            helperText={touched.cityDelivery && errors.cityDelivery}
            value={orderData.cityDelivery}
            fullWidth
            onChange={(e) => {
              handleChange(e);
            }}
          >
            {cities.map((city) => (
              <MenuItem value={city}>{city}</MenuItem>
            ))}
          </TextField>
        </Grid>  
        <Grid item xs={8}>
          <TextField
            id="addressDelivery"
            name="addressDelivery"
            error={touched.addressDelivery && Boolean(errors.addressDelivery)}
            helperText={touched.addressDelivery && errors.addressDelivery}
            label="Calle"
            value={orderData.addressDelivery}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="numberDelivery"
            name="numberDelivery"
            label="Numero"
            inputProps={{ min: '0' }}
            type="number"
            error={touched.numberDelivery && Boolean(errors.numberDelivery)}
            helperText={touched.numberDelivery && errors.numberDelivery}
            value={orderData.numberDelivery}
            onChange={handleChange}
            fullWidth
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            id="referenceDelivery"
            name="referenceDelivery"
            label="Referencia"
            value={orderData.referenceDelivery}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <InputLabel className={classes.fileLabel}>Indique hora de entrega</InputLabel>
          <Select
            fullWidth
            name="immediately"
            id="immediately"
            error={touched.immediately && Boolean(errors.immediately)}
            value={orderData.immediately}
            onChange={handleChange}
          >
            <MenuItem value>Lo antes posible</MenuItem>
            <MenuItem value={false}>Programar pedido</MenuItem>
          </Select>
        </Grid>
        {!orderData.immediately && (
          <Grid item xs={12}>
            <DateTimePicker
              fullWidth
              disablePast
              name="date"
              id="date"
              ampm
              error={touched.date && Boolean(errors.date)}
              helperText={touched.date && errors.date}
              value={orderData.date}
              onChange={(date) => {
                setFieldValue('date', date);
              }}
              label="Seleccione fecha y hora"
              format="dd/MM/yyyy HH:mm"
              minutesStep={30}
            />
          </Grid>
        )}
      </Grid>
    </>
  );
};

DeliveryAddress.propTypes = {
  orderData: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  setFieldValue: PropTypes.func.isRequired,
  touched: PropTypes.any.isRequired,
  errors: PropTypes.any.isRequired,
};

export default DeliveryAddress;
