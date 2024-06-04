import { Badge, Box, Button, Grid, IconButton, Step, StepLabel, Stepper, Typography } from '@mui/material'
import React from 'react'
import AllInboxIcon from '@mui/icons-material/AllInbox';
import styled from '@emotion/styled';
import ForumIcon from '@mui/icons-material/Forum';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import ArchiveIcon from '@mui/icons-material/Archive';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MessageIcon from '@mui/icons-material/Message';
import LocalSeeIcon from '@mui/icons-material/LocalSee';


const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));
const steps = [
    '50 TL Kupon (500 Puan)',
    '100 TL Kupon (1500 Puan)',
    'Premium Üye (2500 Puan)',
];
export default function Premium() {
    return (
        <div>
            <Typography marginLeft={100} variant='h5' >CATERPİE PREMİUM</Typography>
            <Box border={1} width={1000} height={150} marginLeft={30} marginTop={10}>

                <Typography marginLeft={7}>Premium ayrıcalıklarından yararlan!</Typography>
                <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                > <Box border={1} width={250} height={50} marginLeft={7} marginTop={2}>
                        <IconButton aria-label="cart">

                            <StyledBadge color="secondary">
                                <AllInboxIcon />
                                <Typography>100 TL ve üzeri Kargo Bedava</Typography>
                            </StyledBadge>
                        </IconButton></Box>
                    <Box border={1} width={250} height={50} marginLeft={7} marginTop={2}><IconButton aria-label="cart">

                        <StyledBadge color="secondary">
                            <ForumIcon />
                            <Typography marginLeft={1} marginTop={0.3}>Müşteri hattında Öncelik</Typography>
                        </StyledBadge>
                    </IconButton></Box> </Grid>
            </Box>
            <Box border={1} width={1000} height={250} marginLeft={30} marginTop={2}>


                <Box sx={{ marginTop: 7, width: '100%' }}>
                    <Stepper activeStep={1} alternativeLabel>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>

                    <StyledBadge color="secondary">
                        <ErrorOutlineIcon sx={{ marginTop: 5, marginLeft: 3 }} />
                        <Typography marginLeft={5} marginTop={5}>
                            Yorum sonrası kazandığınız puanların toplam puanınıza eklenmesi ve görüntülenmesinde 3 saate varan gecikmeler yaşanabilir.</Typography>
                    </StyledBadge>
                </Box>
            </Box>

            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start">
                <Button variant='outlined' sx={{ marginTop: 5, marginLeft: 30, width: 450, height: 60 }}>
                    <IconButton aria-label="cart">

                        <StyledBadge color="secondary">
                            <ArchiveIcon />
                            <Typography>   Her 150 TL'lik alışverişinde(50 Puan)</Typography>
                        </StyledBadge>
                    </IconButton>


                </Button>
                <Button variant='outlined' sx={{ marginTop: 5, marginLeft: 10, width: 450, height: 60 }}>
                    <IconButton aria-label="cart">

                        <StyledBadge color="secondary">
                            <ShoppingCartIcon />
                            <Typography>Her 150 TL'lik Market alışverişinde(50 Puan)</Typography>
                        </StyledBadge>
                    </IconButton>


                </Button>
                <Button variant='outlined' sx={{ marginTop: 5, marginLeft: 30, width: 450, height: 60 }}>
                    <IconButton aria-label="cart">

                        <StyledBadge color="secondary">
                            <MessageIcon />
                            <Typography>Yorum yapma(30 Puan)</Typography>
                        </StyledBadge>
                    </IconButton>

                </Button>
                <Button variant='outlined' sx={{ marginTop: 5, marginLeft: 10, width: 450, height: 60 }}>
                    <IconButton aria-label="cart">

                        <StyledBadge color="secondary">
                            <LocalSeeIcon />
                            <Typography>Fotoğraflı yorum yapma(30 Puan)</Typography>
                        </StyledBadge>
                    </IconButton>

                </Button>
            </Grid>



        </div>
    )
}