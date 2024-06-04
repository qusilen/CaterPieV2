import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Grid, Card, CardMedia, CardContent } from '@mui/material';

const products = [
  { id: 1, name: 'Ürün 1', image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Ürün 2', image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Ürün 3', image: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Ürün 4', image: 'https://via.placeholder.com/150' },
];

const SellerPage = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <img src="https://via.placeholder.com/40" alt="Seller Logo" style={{ borderRadius: '50%', marginRight: '10px' }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Satıcı Adı
          </Typography>
          <Button variant="contained" color="secondary">
            Takip Et
          </Button>
        </Toolbar>
      </AppBar>
      <Container sx={{ marginTop: '20px' }}>
        <Grid container spacing={3}>
          {products.map(product => (
            <Grid item key={product.id} xs={12} sm={6} md={3}>
              <Card>
                <CardMedia
                  component="img"
                  height="150"
                  image={product.image}
                  alt={product.name}
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    {product.name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default SellerPage;