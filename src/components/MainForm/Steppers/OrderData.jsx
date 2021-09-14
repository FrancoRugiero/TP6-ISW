import React from 'react';
import { Typography, Grid, TextField, InputLabel ,MenuItem,Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { PropTypes } from 'prop-types';


export const comercios = ['Adidas', '47street', 'oaxaca'];
export const productosAdidas = ['questar flow', 'nmd_r1', 'hoops 2.0','daily 3.0'];
export const productos47Street = ['Campera Berlin', 'Campera E. kala', 'Canguro basic relax'];
export const productosOaxaca = ['Tacos', 'Lomos 2x1', 'Fajitas','Chidas','Nacho oaxaca'];
export const preciosAdidas = [4500, 5000, 5500,7000];
export const precios47Street = [3000, 4000, 5000];
export const preciosOaxaca = [400,600,200,350,250];

const useStyles = makeStyles((theme) => ({
  fileLabel: {
    marginBottom: theme.spacing(1),
  },
  divider: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
  },
}));

const OrderData = ({ orderData, handleChange, touched, errors, setFieldValue,setArrayNoVacio, setPrecioAcumulado}) => {
  const classes = useStyles();

  const agregarAlCarrito = () => {
    if(orderData.producto === productosAdidas[0]){
      orderData.precio = preciosAdidas[0];
      orderData.precioAcumulado += (orderData.precio * orderData.cantidad)
      orderData.carrito.push(orderData.comercio+" - "+orderData.producto+" - Precio por unidad: "+orderData.precio+" x "+orderData.cantidad+" Unidad/es - Total: $"+(orderData.precio*orderData.cantidad))
    }
    if(orderData.producto === productosAdidas[1]){
      orderData.precio = preciosAdidas[1];
      orderData.precioAcumulado += (orderData.precio * orderData.cantidad)
      orderData.carrito.push(orderData.comercio+" - "+orderData.producto+" - Precio por unidad: "+orderData.precio+" x "+orderData.cantidad+" Unidad/es - Total: $"+(orderData.precio*orderData.cantidad))
    }
    if(orderData.producto === productosAdidas[2]){
      orderData.precio = preciosAdidas[2];
      orderData.precioAcumulado += (orderData.precio * orderData.cantidad)
      orderData.carrito.push(orderData.comercio+" - "+orderData.producto+" - Precio por unidad: "+orderData.precio+" x "+orderData.cantidad+" Unidad/es - Total: $"+(orderData.precio*orderData.cantidad))
    }
    if(orderData.producto === productosAdidas[3]){
      orderData.precio = preciosAdidas[3];
      orderData.precioAcumulado += (orderData.precio * orderData.cantidad)
      orderData.carrito.push(orderData.comercio+" - "+orderData.producto+" - Precio por unidad: "+orderData.precio+" x "+orderData.cantidad+" Unidad/es - Total: $"+(orderData.precio*orderData.cantidad))
    }
    if(orderData.producto === productos47Street[0]){
      orderData.precio = precios47Street[0];
      orderData.precioAcumulado += (orderData.precio * orderData.cantidad)
      orderData.carrito.push(orderData.comercio+" - "+orderData.producto+" - Precio por unidad: "+orderData.precio+" x "+orderData.cantidad+" Unidad/es - Total: $"+(orderData.precio*orderData.cantidad))
    }
    if(orderData.producto === productos47Street[1]){
      orderData.precio = precios47Street[1];
      orderData.precioAcumulado += (orderData.precio * orderData.cantidad)
      orderData.carrito.push(orderData.comercio+" - "+orderData.producto+" - Precio por unidad: "+orderData.precio+" x "+orderData.cantidad+" Unidad/es - Total: $"+(orderData.precio*orderData.cantidad))
    }
    if(orderData.producto === productos47Street[2]){
      orderData.precio = precios47Street[2];
      orderData.precioAcumulado += (orderData.precio * orderData.cantidad)
      orderData.carrito.push(orderData.comercio+" - "+orderData.producto+" - Precio por unidad: "+orderData.precio+" x "+orderData.cantidad+" Unidad/es - Total: $"+(orderData.precio*orderData.cantidad))
    }
    if(orderData.producto === productosOaxaca[0]){
      orderData.precio = preciosOaxaca[0];
      orderData.precioAcumulado += (orderData.precio * orderData.cantidad)
      orderData.carrito.push(orderData.comercio+" - "+orderData.producto+" - Precio por unidad: "+orderData.precio+" x "+orderData.cantidad+" Unidad/es - Total: $"+(orderData.precio*orderData.cantidad))
    }
    if(orderData.producto === productosOaxaca[1]){
      orderData.precio = preciosOaxaca[1];
      orderData.precioAcumulado += (orderData.precio * orderData.cantidad)
      orderData.carrito.push(orderData.comercio+" - "+orderData.producto+" - Precio por unidad: "+orderData.precio+" x "+orderData.cantidad+" Unidad/es - Total: $"+(orderData.precio*orderData.cantidad))
    }
    if(orderData.producto === productosOaxaca[2]){
      orderData.precio = preciosOaxaca[2];
      orderData.precioAcumulado += (orderData.precio * orderData.cantidad)
      orderData.carrito.push(orderData.comercio+" - "+orderData.producto+" - Precio por unidad: "+orderData.precio+" x "+orderData.cantidad+" Unidad/es - Total: $"+(orderData.precio*orderData.cantidad))
    }
    if(orderData.producto === productosOaxaca[3]){
      orderData.precio = preciosOaxaca[3];
      orderData.precioAcumulado += (orderData.precio * orderData.cantidad)
      orderData.carrito.push(orderData.comercio+" - "+orderData.producto+" - Precio por unidad: "+orderData.precio+" x "+orderData.cantidad+" Unidad/es - Total: $"+(orderData.precio*orderData.cantidad))
    }
    if(orderData.producto === productosOaxaca[4]){
      orderData.precio = preciosOaxaca[4];
      orderData.precioAcumulado += (orderData.precio * orderData.cantidad)
      orderData.carrito.push(orderData.comercio+" - "+orderData.producto+" - Precio por unidad: "+orderData.precio+" x "+orderData.cantidad+" Unidad/es - Total: $"+(orderData.precio*orderData.cantidad))
    }
 
  setFieldValue("");
  orderData.comercio="";
  orderData.producto="";
  orderData.cantidad=1;
  setArrayNoVacio(true);
  setPrecioAcumulado(orderData.precioAcumulado)
  }

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Datos del pedido
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            id="comercio"
            select
            name="comercio"
            error={touched.comercio && Boolean(errors.comercio)}
            label="Seleccione el comercio adherido"
            value={orderData.comercio}
            onChange={(e) => {
              handleChange(e);
            }}
            fullWidth
          >
            {comercios.map((com) => (
              <MenuItem value={com}>{com}</MenuItem>
            ))} 
           </TextField>
        </Grid>
        {orderData.comercio ==='Adidas' ?(
          <>
        <Grid item xs={12}>
          <TextField
            id="producto"
            select
            name="producto"
            error={touched.producto && Boolean(errors.producto)}
            label="Seleccione el producto a comprar"
            value={orderData.producto}
            onChange={(e) => {
              handleChange(e);
            }}
            fullWidth
          >
            {productosAdidas.map((adi) => (
              <MenuItem value={adi}>{adi}</MenuItem>
            ))} 
           </TextField>
        </Grid>

        <Grid item xs={12}>
          <TextField
            id="cantidad"
            name="cantidad"
            label="Cantidad"
            inputProps={{ min: '0' }}
            type="number"
            error={touched.cantidad && Boolean(errors.cantidad)}
            helperText={touched.cantidad && errors.cantidad}
            value={orderData.cantidad}
            onChange={handleChange}
            fullWidth
          />
        </Grid>  
        
         <Grid item xs={12}>
         <Button
         type="button"
         variant="contained"
         color="primary"
         className={classes.button}
         onClick={agregarAlCarrito}
       >
         Agregar al carrito
       </Button>
       </Grid>
       </>
        ):(null)}
          {orderData.comercio ==='47street' ?(
            <>
             <Grid item xs={12}>
             <TextField
               id="producto"
               select
               name="producto"
               error={touched.producto && Boolean(errors.producto)}
               label="Seleccione el producto a comprar"
               value={orderData.producto}
               onChange={(e) => {
                 handleChange(e);
               }}
               fullWidth
             >
               {productos47Street.map((str) => (
                 <MenuItem value={str}>{str}</MenuItem>
               ))} 
              </TextField>
              <Grid item xs={12}>
          <TextField
            id="cantidad"
            name="cantidad"
            label="Cantidad"
            inputProps={{ min: '0' }}
            type="number"
            error={touched.cantidad && Boolean(errors.cantidad)}
            helperText={touched.cantidad && errors.cantidad}
            value={orderData.cantidad}
            onChange={handleChange}
            fullWidth
          />
        </Grid>

           </Grid>
            <Grid item xs={12}>
            <Button
            type="button"
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={agregarAlCarrito}
          >
            Agregar al carrito
          </Button>
          </Grid>
          
          </>
            ):(null)}
            {orderData.comercio ==='oaxaca' ?(
              <>
             <Grid item xs={12}>
             <TextField
               id="producto"
               select
               name="producto"
               error={touched.producto && Boolean(errors.producto)}
               label="Seleccione el producto a comprar"
               value={orderData.producto}
               onChange={(e) => {
                 handleChange(e);
               }}
               fullWidth
             >
               {productosOaxaca.map((oaxa) => (
                 <MenuItem value={oaxa}>{oaxa}</MenuItem>
               ))} 
              </TextField>       
           </Grid>
           <Grid item xs={12}>
          <TextField
            id="cantidad"
            name="cantidad"
            label="Cantidad"
            inputProps={{ min: '0' }}
            type="number"
            error={touched.cantidad && Boolean(errors.cantidad)}
            helperText={touched.cantidad && errors.cantidad}
            value={orderData.cantidad}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
            <Grid item xs={12}>
            <Button
            type="button"
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={agregarAlCarrito}
          >
            Agregar al carrito
          </Button>
          </Grid>
          

          </>
            ):(null)}
            {orderData.precioAcumulado > 0 ?(
              <>
             <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Productos en Carrito
          </Typography>
          <Typography gutterBottom>      
             {orderData.carrito.map((carr) => (             
              <InputLabel value={carr}>{carr}</InputLabel> 
              ))}                   
          </Typography>
        </Grid>
        <Grid item xs={12}>
        <Typography variant="h6" gutterBottom className={classes.title}>
          Total Acumulado: ${orderData.precioAcumulado}
        </Typography>
        </Grid>
        </>
         ):(null)}
        
      </Grid>
    </>
  );
};

OrderData.propTypes = {
  orderData: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  setFieldValue: PropTypes.func.isRequired,
  touched: PropTypes.any.isRequired,
  errors: PropTypes.any.isRequired,
};

export default OrderData;
