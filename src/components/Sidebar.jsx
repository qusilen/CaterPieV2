import styled from '@emotion/styled';
import { Button, ButtonGroup, Grid } from '@mui/material';
import React from 'react'

export const Sidebar = () => {
  const OrangeButton= styled(Button)(({theme})=>({
    backgroundColor:theme.palette.secondary.main,
    color:"#f27a1a",
    marginTop:"100px",
    "&:hover":{
      backgroundColor:"white"
    },
  }));
  return (
<ButtonGroup>
      <Grid>
        <OrangeButton
        variant='contained' 
    
        sx={{ marginTop: "100px", marginLeft: "100px", width:400,height:50 }}>
          <h3>Sepete En Çok Eklenenler</h3>
        </OrangeButton>
      </Grid>
      <Grid>
        <OrangeButton
        variant='contained'
        sx={{ marginTop: "100px", marginLeft: "30px",width:400,height:50 }}>
          <h3>En Çok Öne Çıkanlar</h3>
        </OrangeButton>
      </Grid>
      <Grid>
        <OrangeButton
        href='/onerilenurunler'
        variant='contained'
        sx={{ marginTop: "100px", marginLeft: "30px",marginRight:"100px",width:400,height:50 }}>
        <h3>ÖNERİLEN ÜRÜNLER</h3>
        </OrangeButton>
      </Grid>
      </ButtonGroup>  )
}