import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Stepper, StepLabel, Step, Button, Grid, StepContent } from '@material-ui/core';
import * as yup from 'yup';
import { useFormik } from 'formik';
import OrderData from './Steppers/OrderData';
import Review from './Steppers/Review';
import Payment from './Steppers/Payment';
import DeliveryAddress from './Steppers/DeliveryAddress';

const useStyles = makeStyles((theme) => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    marginTop: theme.spacing(5),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const initialOrderData = {
  comercio: '',
  carrito:[],
  producto:'',
  addressDelivery: '',
  numberDelivery: '',
  cityDelivery: '',
  referenceDelivery: '',
  mapActive: false,
  immediately: true,
  date: new Date(),
  cash: true,
  amount: '',
  cardNumber: '',
  cardName: '',
  expDate: '',
  cvv: '',
  dni: '',
};

const steps = ['Datos del Pedido', 'Dirección del Pedido', 'Método de Pago', 'Resumen'];

const validationSchema = [
  yup.object().shape({
    comercio: yup.string(),
    producto: yup.string()
  }),
  yup.object().shape({
    addressDelivery: yup.string().required(),
    numberDelivery: yup.number().min(0).required(),
    cityDelivery: yup.string().required(),
    referenceDelivery: yup.string(),
    immediately: yup.boolean(),
    date: yup.date().when('immediately', {
      is: false,
      then: yup.date().min(new Date()).required(),
    }),
  }),
  yup.object().shape({
    cash: yup.boolean().required(),
    amount: yup.number().when('cash', {
      is: true,
      then: yup.number().min(0).required(),
    }),
    cardNumber: yup.string().when('cash', {
      is: false,
      then: yup.string().required().length(19),
    }),
    cardName: yup.string().when('cash', {
      is: false,
      then: yup.string().required(),
    }),
    expDate: yup.string().when('cash', {
      is: false,
      then: yup
        .string()
        .test('is-exp-date', 'Error en la fecha', (value) => {
          if (value) {
            const month = Number(value.substr(0, 2));
            const year = Number(value.substr(value.length - 2));
            const currentYear = Number(new Date().getFullYear().toString().substr(2));
            const currentMonth = Number((new Date().getMonth() + 1).toString());

            if (year > currentYear) {
              return true;
            }
            if (year === currentYear && month >= currentMonth) {
              return true;
            }
          }
          return false;
        })
        .length(5)
        .required(),
    }),
    cvv: yup.string().when('cash', {
      is: false,
      then: yup
        .string()
        .test('is-cvv', 'Error cvv', (value) => {
          if (value && (value.length === 3 || value.length === 4)) {
            return true;
          }
          return false;
        })
        .required(),
    }),
    dni: yup.string().when('cash', {
      is: false,
      then: yup.string().required(),
    }),
  }),
];
const MainForm = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [arrayNoVacio, setArrayNoVacio] = useState(false);
  const [orderData, setOrderData] = useState(initialOrderData);

  const handleSelectedDate = (e) => {
    setOrderData((prevState) => ({ ...prevState, date: e }));
    console.log(orderData);
  };

  const handleNext = () => {
   // console.log(arrayNoVacio);
    if(arrayNoVacio === true){
    setActiveStep(activeStep + 1);
   }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  const handleSubmitForm = (values, { resetForm }) => {
    if (activeStep === 3) {
      console.log('Ready');
      handleNext();
      resetForm({});
    } else {
      handleNext();
    }
  };

  const { handleChange, handleSubmit, values, errors, touched, setFieldValue } = useFormik({
    initialValues: initialOrderData,
    validationSchema: validationSchema[activeStep],
    onSubmit: handleSubmitForm,
  });
  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <OrderData
            orderData={values}
            handleChange={handleChange}
            setFieldValue={setFieldValue}
            errors={errors}
            touched={touched}
            handleSelectedDate={handleSelectedDate}
            setArrayNoVacio={setArrayNoVacio}
          />
        );
      case 1:
        return (
          <DeliveryAddress
            orderData={values}
            setFieldValue={setFieldValue}
            errors={errors}
            touched={touched}
            handleChange={handleChange}
            handleSelectedDate={handleSelectedDate}
          />
        );
      case 2:
        return (
          <Payment
            orderData={values}
            setFieldValue={setFieldValue}
            errors={errors}
            touched={touched}
            handleChange={handleChange}
          />
        );
      case 3:
        return <Review orderData={values} />;
      default:
        throw new Error('Unknown step');
    }
  };

  return (
    <div className={classes.layout}>
      <>
        {activeStep === steps.length ? (
          <>
            <Grid container direction="column" alignItems="center" justify="center">
              <Grid item>
                <Typography variant="h5" align="center" gutterBottom>
                  Gracias por realizar tu pedido!
                </Typography>
              </Grid>
              <Grid item>
                <img src="images/tilde.jpg" alt="tilde" align="center" width={250} />
              </Grid>
              <Grid item>
                <Typography variant="subtitle1" align="center">
                  Tu número de pedido es: 5738. Muchas Gracias por su compra.
                </Typography>
              </Grid>
            </Grid>
            <div className={classes.buttons}>
              <Button onClick={() => setActiveStep(0)} className={classes.button}>
                Realizar otro pedido
              </Button>
            </div>
          </>
        ) : (
          <>
            <Typography component="h1" variant="h5" align="center" gutterBottom>
              <b> Pedí a tu comercio adherido favorito</b>
            </Typography>
            <Typography variant="body1" align="center" gutterBottom>
              No te quedes con las ganas!
            </Typography>
            <Stepper activeStep={activeStep} orientation="vertical" className={classes.stepper}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                  <StepContent>
                    <>
                      <form onSubmit={handleSubmit}>
                        {getStepContent(activeStep)}
                        <div className={classes.buttons}>
                          {activeStep !== 0 && (
                            <Button onClick={handleBack} className={classes.button}>
                              Atras
                            </Button>
                          )}
                          <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            className={classes.button}
                          >
                            {activeStep === steps.length - 1 ? 'Confirmar' : 'Siguiente'}
                          </Button>
                        </div>
                      </form>
                    </>
                  </StepContent>
                </Step>
              ))}
            </Stepper>
          </>
        )}
      </>
    </div>
  );
};

export default MainForm;
