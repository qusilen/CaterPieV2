import styled from '@emotion/styled';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react'

export const Feed = () => {
  const OrangeButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    color: "white",
    width: 400,
    height: 50,
    "&:hover": {
      backgroundColor: "#f27a1a"
    },
  }));
  return (

    <>

      <Card sx={{ maxWidth: 400, maxHeight: 250, marginTop: "100px", marginLeft: "100px" }} >
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="flex-start">


          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image="https://cdn.dsmcdn.com/ty864/pimWidgetApi/mobile_20230504173320_2316859ElektronikMobile202305042001.jpg"
              alt="teknosa"
            />

          </CardActionArea>
          <CardActions>
            <OrangeButton
              size='large'
              color='inherit'
            >
              <CardContent>
                <Typography gutterBottom variant="ButtonText" component="div" color={'black'}>
                  teknosa
                </Typography>

              </CardContent>
              alışverişe başla
            </OrangeButton>
          </CardActions>
        </Grid>
      </Card>
      <Card sx={{ maxWidth: 400, maxHeight: 250, marginTop: "100px", marginLeft: "30px" }} >
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="flex-start"
        >

          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image="https://cdn.dsmcdn.com/ty870/pimWidgetApi/mobile_20230507171702_2311009KadinMobile202305042001.jpg"
              alt="mango"
            />

          </CardActionArea>
          <CardActions>
            <OrangeButton
              size='large'
              color='inherit'
            >
              <CardContent>
                <Typography gutterBottom variant="ButtonText" component="div" color={'black'}>
                  mango
                </Typography>

              </CardContent>
              alışverişe başla
            </OrangeButton>
          </CardActions>
        </Grid>
      </Card>
      <Card sx={{ maxWidth: 400, maxHeight: 250, marginTop: "100px", marginLeft: "30px" }} >
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="flex-start"
        >

          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image="https://cdn.dsmcdn.com/ty849/pimWidgetApi/mobile_20230428123101_2303698KadinMobile202304251501.jpg"
              alt="skechers"
            />

          </CardActionArea>
          <CardActions>
            <OrangeButton
              size='large'
              color='inherit'
            >
              <CardContent>
                <Typography gutterBottom variant="ButtonText" component="div" color={'black'}>
                  skechers
                </Typography>

              </CardContent>
              alışverişe başla
            </OrangeButton>
          </CardActions>
        </Grid>

      </Card>
      <Card sx={{ maxWidth: 400, maxHeight: 250, marginTop: "30px", marginLeft: "100px" }} >
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="flex-start">


          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image="https://cdn.dsmcdn.com/ty863/pimWidgetApi/mobile_20230503203145_2316414AyakkabiCantaMobile202305031802.jpg"
              alt="ayakkabi&canta"
            />


          </CardActionArea>
          <CardActions>
            <OrangeButton
              size='large'
              color='inherit'
            > <CardContent>
                <Typography gutterBottom variant="ButtonText" component="div" color={'black'}>
                  ayakkabı&canta
                </Typography>
              </CardContent>
              alışverişe başla
            </OrangeButton>
          </CardActions>
        </Grid>
      </Card>
      <Card sx={{ maxWidth: 400,maxHeight:250, marginTop: "30px", marginLeft: "30px" }} >
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="flex-start">


          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image="https://cdn.dsmcdn.com/ty864/pimWidgetApi/mobile_20230504185624_2316710ElektronikMobile202305.jpg"
              alt="philips"
            />
            
          </CardActionArea>
          <CardActions>
            <OrangeButton
              size='large'
              color='inherit'
            >
              <CardContent>
              <Typography variant="ButtonText" component="div" color={'black'}>
                Philips
              </Typography>

            </CardContent>
              alışverişe başla
            </OrangeButton>
          </CardActions>
        </Grid>
      </Card>
      <Card sx={{ maxWidth: 400,maxHeight:250, marginTop: "30px", marginLeft: "30px" }} >
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="flex-start">


          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image="https://cdn.dsmcdn.com/ty872/pimWidgetApi/mobile_20230508100513_GetAttachmentThumbnail1.jpg"
              alt="hotiç"
            />
            
            
          </CardActionArea>
          <CardActions>
            <OrangeButton
              size='large'
              color='inherit'
            ><CardContent>
              <Typography gutterBottom variant="ButtonText" component="div" color={'black'}>
                hotiç
              </Typography>
              </CardContent>
              alışverişe başla
            </OrangeButton>
          </CardActions>
        </Grid>
      </Card>
    </>
  )
}