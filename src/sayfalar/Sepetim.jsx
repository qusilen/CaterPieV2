import React,{useState} from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Button, ButtonGroup, Card, CardMedia, Checkbox, Container, FormControlLabel, Grid, IconButton, Link, Tooltip, Typography, } from '@mui/material'
export default function sepetim() {

  return (
    <div>
      <Container
        marginTop={50}
        mt={10}
        component="span" style={{ marginTop: 100, border: '1px solid black ', borderRadius: 5, width: "1000px", height: "210px", marginLeft: 100 }}>
        <Box sx={{ borderBottom: "1px solid black ", height: "50px", width: "998px", marginInline: -3 }}>
          <FormControlLabel
            value="end"
            control={<Checkbox />}
            label="Satıcı Adı"
            labelPlacement="end"
          />
        </Box>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center">

          <FormControlLabel sx={{ marginTop: 2 }}

            value="end"
            control={<Checkbox />}
            label={<Card sx={{ marginBottom: 2 }}>
              <CardMedia
                component="img"
                height="120"
                image="https://cdn.dsmcdn.com/ty281/product/media/images/20211229/10/17910100/346715585/1/1_org_zoom.jpg"
                alt="koton"
              >
              </CardMedia>
            </Card>}
            labelPlacement="end"
          />
          <Typography variant='caption' sx={{ marginBottom: '50px' }}>
            <div>Koton Paçası Yırtık Straight Fit Kot Pantolon</div>
            <div>Beden: 38/34</div>
            <div>Hızlı Teslimat En geç 1 gün içinde kargoda </div>
          </Typography>
   
          <Tooltip sx={{marginLeft:"500px"}} title="Delete">
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </Tooltip>

        </Grid>
      </Container>
     
        <Container
        marginTop={10}
        mt={10}
        component="span" style={{ marginTop: 10, border: '1px solid black ', borderRadius: 5, width: "1000px", height: "210px", marginLeft: 100 }}>
        <Box sx={{ borderBottom: "1px solid black ", height: "50px", width: "998px", marginInline: -3 }}>
          <FormControlLabel
            value="end"
            control={<Checkbox />}
            label="Satıcı Adı"
            labelPlacement="end"
          />
        </Box>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center">

          <FormControlLabel sx={{ marginTop: 2 }}

            value="end"
            control={<Checkbox />}
            label={<Card sx={{ marginBottom: 2 }}>
              <CardMedia
                component="img"
                height="120"
                image="https://cdn.dsmcdn.com/ty666/product/media/images/20221227/11/247456700/130314883/5/5_org_zoom.jpg"
                alt="puma"
              >
              </CardMedia>
            </Card>}
            labelPlacement="end"
          />
          <Typography variant='caption' sx={{ marginBottom: '50px' }}>
            <div>PumaSkye Clean - Unisex Beyaz Günlük Ayakkabı</div>
            <div>Beden: 38</div>
            <div>Hızlı Teslimat En geç 1 gün içinde kargoda </div>
          </Typography>
   
          <Tooltip sx={{marginLeft:"465px"}} title="Delete">
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </Tooltip>

        </Grid>
      </Container>
      <Grid 
          container spacing={45}
          direction="column"
          justifyContent="center"
          alignItems="flex-start">


        <Button href='/odeme' variant="contained" companent="div" sx={{marginLeft:200,color:"white" , width:"200px"}}>Sepeti Onayla</Button>
        <Box sx={{ border:"1px solid black", borderRadius:1, marginLeft:200 , height: "260px", width: "200px" }}>
          <h4>Sipariş Özeti</h4>
          <div>Ürünün Toplamı: </div>
          <br/>
          <div>Kargo Toplamı:</div>
          <Box sx={{borderBottom:"1px solid black" ,marginTop:"20px", marginInline:3}}></Box>
          <Button sx={{marginTop:2 , marginBottom:2}}>İndirim kuponu giriniz </Button>
          <div>Sipariş Toplamı:</div>
        </Box>
        <Button href='/odeme' variant="contained" companent="div" sx={{marginLeft:200,color:"white" , width:"200px"}}>Sepeti Onayla</Button>
        </Grid>
       
      
    </div>
  )
}
