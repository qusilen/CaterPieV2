import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Icon from '@mui/material/Icon';
import { Button, Grid, styled } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PersonIcon from '@mui/icons-material/Person';
import SellIcon from '@mui/icons-material/Sell';
import AddCommentIcon from '@mui/icons-material/AddComment';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import HolidayVillageIcon from '@mui/icons-material/HolidayVillage';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import DiamondIcon from '@mui/icons-material/Diamond';
import PasswordIcon from '@mui/icons-material/Password';
import LogoutIcon from '@mui/icons-material/Logout';

export default function CPDeck() {
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
        <div>

            <Button href='/siparislerim' color="primary" sx={{ marginTop: "100px", marginLeft: "250px" }}>
                <Card sx={{ height: "150px", width: "150px" }}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-around"
                        alignItems="flex-start"
                    >
                        <CardContent sx={{ height: "100px", width: "100px" }}>
                            <Icon sx={{ marginTop: "20px", ml: '40px' }}><ShoppingCartIcon /></Icon>
                            <Typography variant="h7" component="div" sx={{ marginTop: "20px" }} >
                                SİPARİŞLERİM
                            </Typography>
                        </CardContent>
                    </Grid>
                </Card>
            </Button>

            <Button href='/favoriler' color="primary" sx={{ marginTop: "100px", marginLeft: "100px" }}>
                <Card sx={{ height: "150px", width: "150px" }}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-around"
                        alignItems="flex-start"
                    >
                        <CardContent sx={{ height: "100px", width: "100px" }}>
                            <Icon sx={{ marginTop: "20px", marginLeft: "37px" }}><FavoriteIcon /></Icon>
                            <Typography variant="h7" component="div" sx={{ marginTop: "20px", marginLeft: "10px" }} >
                                FAVORİLER
                            </Typography>
                        </CardContent>
                    </Grid>
                </Card>
            </Button>

            <Button color="primary" sx={{ marginTop: "100px", marginLeft: "100px" }}>
                <Card sx={{ height: "150px", width: "150px" }}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-around"
                        alignItems="flex-start"
                    >
                        <CardContent sx={{ height: "100px", width: "100px" }}>
                            <Icon sx={{ marginTop: "20px" }}><LocalShippingIcon /></Icon>
                            <Typography variant="h7" component="div" sx={{ marginTop: "20px" }} >
                                KARGO TAKİP
                            </Typography>
                        </CardContent>
                    </Grid>
                </Card>
            </Button>

            <Button color="primary" sx={{ marginTop: "100px", marginLeft: "100px" }}>
                <Card sx={{ height: "150px", width: "150px" }}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-around"
                        alignItems="flex-start"
                    >
                        <CardContent sx={{ height: "100px", width: "100px" }}>
                            <Icon sx={{ marginTop: "20px" }}><PersonIcon /></Icon>
                            <Typography variant="h7" component="div" sx={{ marginTop: "20px" }} >
                                HESABIM
                            </Typography>
                            <Typography variant="caption" component="div">
                                (KİŞİSEL BİLGİLERİM)
                            </Typography>
                        </CardContent>
                    </Grid>
                </Card>
            </Button>

            <Button color="primary" sx={{ marginTop: "50px", marginLeft: "250px" }}>
                <Card sx={{ height: "150px", width: "150px" }}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-around"
                        alignItems="flex-start"
                    >
                        <CardContent sx={{ height: "100px", width: "100px" }}>
                            <Icon sx={{ marginTop: "20px" }}><SellIcon /></Icon>
                            <Typography variant="h7" component="div" sx={{ marginTop: "20px" }} >
                                KUPONLAR
                            </Typography>
                        </CardContent>
                    </Grid>
                </Card>
            </Button>

            <Button href='/degerlendirmelerim' color="primary" sx={{ marginTop: "50px", marginLeft: "100px" }}>
                <Card sx={{ height: "150px", width: "150px" }}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-around"
                        alignItems="flex-start"
                    >
                        <CardContent sx={{ height: "100px", width: "100px" }}>
                            <Icon sx={{ marginTop: "20px", ml: "40px" }}><AddCommentIcon /></Icon>
                            <Typography variant="h7" component="div" sx={{ marginTop: "20px", ml: "30px" }} >
                                ÜRÜN
                            </Typography>
                            <Typography variant="h7" component="div" sx={{ marginTop: "1px", ml: "-13px" }} >
                                DEĞERLENDİRME
                            </Typography>
                        </CardContent>
                    </Grid>
                </Card>
            </Button>

            <Button href='/tekrarsatinal' color="primary" sx={{ marginTop: "50px", marginLeft: "100px" }}>
                <Card sx={{ height: "150px", width: "150px" }}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-around"
                        alignItems="flex-start"
                    >
                        <CardContent sx={{ height: "100px", width: "100px" }}>
                            <Icon sx={{ marginTop: "20px", ml:"40px" }}><ShoppingCartCheckoutIcon /></Icon>
                            <Typography variant="h7" component="div" sx={{ marginTop: "20px", ml:"20px" }} >
                                TEKRAR SATIN AL
                            </Typography>
                        </CardContent>
                    </Grid>
                </Card>
            </Button>

            <Button href="/kayitliAdresler" color="primary" sx={{ marginTop: "50px", marginLeft: "100px" }}>
                <Card sx={{ height: "150px", width: "150px" }}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-around"
                        alignItems="flex-start"
                    >
                        <CardContent sx={{ height: "100px", width: "100px" }}>
                            <Icon sx={{ marginTop: "20px" }}><HolidayVillageIcon /></Icon>
                            <Typography variant="h7" component="div" sx={{ marginTop: "20px" }} >
                                KAYITLI ADRESLER
                            </Typography>
                        </CardContent>
                    </Grid>
                </Card>
            </Button>

            <Button  href='/odeme' color="primary" sx={{ marginTop: "50px", marginLeft: "250px" }}>
                <Card sx={{ height: "150px", width: "150px" }}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-around"
                        alignItems="flex-start"
                    >
                        <CardContent sx={{ height: "100px", width: "100px" }}>
                            <Icon sx={{ marginTop: "20px" }}><CreditCardIcon /></Icon>
                            <Typography variant="h7" component="div" sx={{ marginTop: "20px" }} >
                                KAYITLI KARTLAR
                            </Typography>
                        </CardContent>
                    </Grid>
                </Card>
            </Button>

            <Button href='/premium' color="primary" sx={{ marginTop: "50px", marginLeft: "100px" }}>
                <Card sx={{ height: "150px", width: "150px" }}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-around"
                        alignItems="flex-start"
                    >
                        <CardContent sx={{ height: "100px", width: "100px" }}>
                            <Icon sx={{ marginTop: "20px" }}><DiamondIcon /></Icon>
                            <Typography variant="h7" component="div" sx={{ marginTop: "20px" }} >
                                PREMİUM
                            </Typography>
                        </CardContent>
                    </Grid>
                </Card>
            </Button>

            <Button color="primary" sx={{ marginTop: "50px", marginLeft: "100px" }}>
                <Card sx={{ height: "150px", width: "150px" }}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-around"
                        alignItems="flex-start"
                    >
                        <CardContent sx={{ height: "100px", width: "100px" }}>
                            <Icon sx={{ marginTop: "20px" }}><PasswordIcon /></Icon>
                            <Typography variant="h7" component="div" sx={{ marginTop: "20px" }} >
                                ŞİFRE SIFIRLAMA
                            </Typography>
                        </CardContent>
                    </Grid>
                </Card>
            </Button>

            <Button href="/" color="primary" sx={{ marginTop: "50px", marginLeft: "100px" }}>
                <Card sx={{ height: "150px", width: "150px" }}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-around"
                        alignItems="flex-start"
                    >
                        <CardContent sx={{ height: "100px", width: "100px" }}>
                            <Icon sx={{ marginTop: "20px" }}><LogoutIcon /></Icon>
                            <Typography variant="h7" component="div" sx={{ marginTop: "20px" }} >
                                ÇIKIŞ YAP
                            </Typography>
                        </CardContent>
                    </Grid>
                </Card>
            </Button>

        </div>
    )
}
