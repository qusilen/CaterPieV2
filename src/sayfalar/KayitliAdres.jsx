import { Box, Button, Grid, IconButton, Typography } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import Badge from '@mui/material/Badge';
import styled from '@emotion/styled';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));



export default function KayitliAdres() {
    return (
        <div>
            <Box width="70%" marginLeft={25} marginTop={10} border={1} height={75} >
                <Grid
                    container spacing={1}
                    direction="row"
                    justifyContent="space-between"
                    alignItems="basline">
                    <Typography variant='h5' marginLeft={4} marginTop={3.5}> Kayıtlı Adresler</Typography>

                    <IconButton sx={{ marginRight: 4, marginTop: 3.5 }} aria-label="cart">

                        <StyledBadge color="secondary">
                            <AddIcon />
                            <Typography>Adres Ekle</Typography>
                        </StyledBadge>
                    </IconButton>
                </Grid>
            </Box>

            <Box width="70%" marginLeft={25} marginTop={10} border={1} height={500} >
                <Grid
                    container spacing={1}
                    direction="row"
                    justifyContent="space-between"
                    alignItems="basline">

                    <Box sx={{width:250, marginLeft:2, marginTop:10, border:1, height:250}}>
                        <Box width={250} borderBottom={1} height={30}>
                            <h3>Ev Adresi</h3>
                        </Box>
                        <div> Saadet Gökbulut </div>
                        <div> Yeni mah. </div>
                        <div> Karaoğlan Cad. Cater apt. No:96 </div>
                        <div> Yatağan/DENİZLİ </div>
                        <div>0547*******12</div>

                    <Button sx={{paddingLeft:"8", marginBottom:"4"}}>Adres Düzenle</Button>

                    


                    </Box>


                    <Box sx={{width:250, marginLeft:2, marginTop:10, border:1, height:250}}>
                        <Box width={250} borderBottom={1} height={30}>
                            <h3>Ev Adresi</h3>
                        </Box>
                        <div> Saadet Gökbulut </div>
                        <div> Kömür mah. </div>
                        <div> Atatürk Cad. Cat apt. No:96 </div>
                        <div> Merkez/DENİZLİ </div>
                        <div>0547*******12</div>

                    <Button sx={{paddingLeft:"8", marginBottom:"4"}}>Adres Düzenle</Button>

                    


                    </Box>

                    <Box sx={{width:250, marginLeft:2, marginTop:10, border:1, height:250}}>
                        <Box width={250} borderBottom={1} height={30}>
                            <h3>Ev Adresi</h3>
                        </Box>
                        <div> Saadet Gökbulut </div>
                        <div> Çünür mah. </div>
                        <div> Oğlan Cad. Er apt. No:96 </div>
                        <div> Yatağan/MUĞLA </div>
                        <div>0547*******78</div>

                    <Button sx={{paddingLeft:"8", marginBottom:"4"}}>Adres Düzenle</Button>

                    


                    </Box>


                </Grid>
            </Box>

        </div>
    )
}