import React, { useEffect } from 'react';
import { CssBaseline, Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { AppDispatch, RootState, useAppSelector } from '../../store';
import { useDispatch } from 'react-redux';
import { orderOrderListEffect } from '../../store/effects/orders/order.effect';
import { OrderType } from '../../store/types/order/order';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#f9f9f9',
    padding: '20px',
  },
  content: {
    flexGrow: 1,
  },
  orderCard: {
    border: '2px solid #ccc',
    borderRadius: '10px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'scale(1.02)',
    },
    display: 'flex',
  },
  cardMedia: {
    flex: '1',
    objectFit: 'cover',
    width: '150px', // Adjust the width as needed
    height: '150px', // Adjust the height as needed
  },
  cardContent: {
    flex: '2',
    textAlign: 'right',
  },
}));

const OrdersPage = () => {
  const classes = useStyles();
  const dispatch: AppDispatch = useDispatch();

  const {user} = useAppSelector((state: RootState) => state.auth)

  useEffect(() => {
    dispatch(orderOrderListEffect(user?.id))
  }, [])

  const { OrderList } = useAppSelector((state: RootState) => state.order)
  
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.content}>
        <Typography variant="h4" gutterBottom>
          Your Orders
        </Typography>
        {OrderList.length === 0 ? (
          <Typography variant="body1">You have no orders.</Typography>
        ) : (
          <Grid container spacing={3}>
            {OrderList.map((order:OrderType) => (
              <Grid item key={order.id} xs={12}>
                <Card className={classes.orderCard}>
                  <CardMedia
                    component="img"
                    src={"https://via.placeholder.com/150"}
                    alt={`Order ${order.id}`}
                    className={classes.cardMedia}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5">
                      {order.price}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Status: {order.status}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Count: {order.itemCount}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </div>
  );
};

export default OrdersPage;
