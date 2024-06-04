import styled from '@emotion/styled';
import { Box, Card, CardActionArea, CardMedia, FormControl, Grid, IconButton, InputBase, InputLabel, MenuItem, Select, Stepper, Tab, Tabs, Tooltip, Typography } from '@mui/material'
import React from 'react'
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import PropTypes from 'prop-types';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';


function TabPanel(props) {
    const { children, value, index, ...other } = props;
   

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


export default function Siparislerim() {
    const [age, setAge] = React.useState('');
    const [value, setValue] = React.useState(0);

    const handleChangee = (event, newValue) => {
        setValue(newValue);
    };
    const steps = [
        'Sipariş Alındı',
        'Hazırlanıyor',
        'Kargoya verildi',
        'Teslim Edildi'
      ];


    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            right: -3,
            top: 13,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 4px',
        },
    }));
    const Search = styled("div")(({ theme }) => ({
        backgroundColor: "white",
        padding: "0 20px",
        borderRadius: theme.shape.borderRadius,
        width: "40%",
        height: "10px",
        marginTop: "30px",


    }));

    return (
        <div>
            <Box width="70%" marginLeft={25} marginTop={10} border={1} height={75} >
                <Grid
                    container spacing={1}
                    direction="row"
                    justifyContent="space-between"
                    alignItems="basline">
                    <Typography variant='h5' marginLeft={4} marginTop={3.5}> Siparişlerim</Typography>
                    <Search>    <Box border={1} borderRadius={3}>

                        <Tooltip title="Search">
                            <IconButton>
                                <SearchIcon />
                            </IconButton>
                        </Tooltip> <InputBase placeholder='ürün ismi veya markaları ara'  >
                        </InputBase>
                    </Box></Search>
                    <Box sx={{ minWidth: 150, marginTop: 2, marginRight: 2, borderRadius: 5 }}>
                        <FormControl fullWidth>
                            <InputLabel variant='outlined' id="demo-simple-select-label">Zaman aralığı</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Age"
                                onChange={handleChange}
                            >
                                <MenuItem value={10}>Tüm siparişler</MenuItem>
                                <MenuItem value={20}>1 ay </MenuItem>
                                <MenuItem value={30}>2 ay</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Grid>
            </Box>


            <Box sx={{ width: '50%', marginLeft: "300px", marginTop: "20px" }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChangee} aria-label="basic tabs example">
                        <Tab label="Tüm Siparişler" {...a11yProps(0)} />
                        <Tab label="Devam Edenler" {...a11yProps(1)} />
                        <Tab label="İade Edilenler" {...a11yProps(2)} />
                        <Tab label="İptal Edilenler" {...a11yProps(3)} />

                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <Box border={1} width="100%" height={200}>
                        <Box width="100%" borderBottom={1} height={80}>
                            <Grid container
                                direction="row"
                                justifyContent="space-between"
                                alignItems="basline">

                                <h5>Tutar:</h5>
                                <h6>170TL</h6>
                                <h5>Sipariş Tarihi:</h5>
                                <h6>18.05.2023</h6>
                                <h5>Sipariş Özeti:</h5>
                                <h6>1 tesliamat, 2 ürün</h6>
                                <h5>Sipariş Alıcı:</h5>
                                <h6>Dilek Gül</h6>



                            </Grid>
                        </Box>

                        <Grid
                            container
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center">
                            <Typography color={"#00c853"} variant='caption' sx={{ marginTop: 5 }}> Sipariş Hazırlanıyor</Typography></Grid>
                        <Grid
                            container spacing={6}
                            direction="row"
                            justifyContent="center"
                            alignItems="center">
                            <Card sx={{ maxWidth: 70, maxHeight: 70, marginTop: "15px", marginLeft: "80px" }} >

                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="70"
                                        image="https://cdn.dsmcdn.com/ty682/product/media/images/20230111/15/256513195/4436258/1/1_org.jpg"
                                        alt="note"
                                    />
                                </CardActionArea>
                            </Card>


                            <Card sx={{ maxWidth: 70, maxHeight: 70, marginTop: "15px", marginLeft: "10px" }} >
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="70"
                                        image="https://cdn.dsmcdn.com/ty388/product/media/images/20220407/10/85304899/5462910/1/1_org.jpg"
                                        alt="note"
                                    />
                                </CardActionArea>

                            </Card>

                        </Grid>
                    </Box>
                    <Box border={1} width="100%" height={200} marginTop={10}>
                        <Box width="100%" borderBottom={1} height={80}>
                            <Grid container
                                direction="row"
                                justifyContent="space-between"
                                alignItems="basline">

                                <h5>Tutar:</h5>
                                <h6>110TL</h6>
                                <h5>Sipariş Tarihi:</h5>
                                <h6>19.03.2023</h6>
                                <h5>Sipariş Özeti:</h5>
                                <h6>1 tesliamat, 1 ürün</h6>
                                <h5>Sipariş Alıcı:</h5>
                                <h6>Dilek Gül</h6>



                            </Grid>
                        </Box>

                        <Grid
                            container
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center">
                            <Typography color={"#00c853"} variant='caption' sx={{ marginTop: 5 }}> Teslim edildi</Typography></Grid>
                        <Grid
                            container spacing={6}
                            direction="row"
                            justifyContent="center"
                            alignItems="center">
                            <Card sx={{ maxWidth: 70, maxHeight: 70, marginTop: "15px", marginLeft: "80px" }} >

                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="70"
                                        image="https://cdn.dsmcdn.com/ty158/product/media/images/20210809/11/117038253/85123739/1/1_org.jpg"
                                        alt="note"
                                    />
                                </CardActionArea>
                            </Card>

                        </Grid>
                    </Box>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Box border={1} width="100%" height={200}>
                        <Box width="100%" borderBottom={1} height={80}>
                            <Grid container
                                direction="row"
                                justifyContent="space-between"
                                alignItems="basline">

                                <h5>Tutar:</h5>
                                <h6>170TL</h6>
                                <h5>Sipariş Tarihi:</h5>
                                <h6>18.05.2023</h6>
                                <h5>Sipariş Özeti:</h5>
                                <h6>1 tesliamat, 2 ürün</h6>
                                <h5>Sipariş Alıcı:</h5>
                                <h6>Dilek Gül</h6>



                            </Grid>
                        </Box>

                        <Grid
                            container
                            direction="column"
                            justifyContent="flex-start"
                            alignItems="flex-start">
                            <Typography color={"#00c853"} variant='inherit' sx={{ marginTop: 1}}> Sipariş Durumu :</Typography>
                            <Box sx={{ width: '50%' }}>
                                <Stepper activeStep={1} alternativeLabel>
                                    {steps.map((label) => (
                                        <Step key={label}>
                                            <StepLabel>{label}</StepLabel>
                                        </Step>
                                    ))}
                                </Stepper>
                            </Box>
                        </Grid>
                        <Grid
                            container spacing={15}
                            direction="row"
                            justifyContent="flex-end"
                            alignItems="flex-end">
                            <Card sx={{ maxWidth: 70, maxHeight: 70, marginTop: "15px", marginLeft: "80px" }} >

                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="70"
                                        image="https://cdn.dsmcdn.com/ty682/product/media/images/20230111/15/256513195/4436258/1/1_org.jpg"
                                        alt="note"
                                    />
                                </CardActionArea>
                            </Card>


                            <Card sx={{ maxWidth: 70, maxHeight: 70, marginTop: "15px", marginLeft: "10px" }} >
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="70"
                                        image="https://cdn.dsmcdn.com/ty388/product/media/images/20220407/10/85304899/5462910/1/1_org.jpg"
                                        alt="note"
                                    />
                                </CardActionArea>

                            </Card>

                        </Grid>
                    </Box>


                </TabPanel>
                <TabPanel value={value} index={2}>
                <Box border={1} width="100%" height={200}>
                        <Box width="100%" borderBottom={1} height={80}>
                            <Grid container
                                direction="row"
                                justifyContent="space-between"
                                alignItems="basline">

                                <h5>Tutar:</h5>
                                <h6>450TL</h6>
                                <h5>Sipariş Tarihi:</h5>
                                <h6>18.06.2022</h6>
                                <h5>Sipariş Özeti:</h5>
                                <h6>1 tesliamat, 1 ürün</h6>
                                <h5>Sipariş Alıcı:</h5>
                                <h6>Dilek Gül</h6>



                            </Grid>
                        </Box>

                        <Grid
                            container
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center">
                            <Typography color={"error"} variant='inherit' sx={{ marginTop: 5 }}> İade Edildi</Typography></Grid>
                        <Grid
                            container spacing={6}
                            direction="row"
                            justifyContent="center"
                            alignItems="center">
                            <Card sx={{ maxWidth: 70, maxHeight: 70, marginTop: "15px", marginLeft: "80px" }} >

                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="70"
                                        image="https://cdn.dsmcdn.com/ty878/product/media/images/20230510/11/344504640/932952633/1/1_org.jpg"
                                        alt="takı"
                                    />
                                </CardActionArea>
                            </Card>
                            </Grid>

                
                </Box>
</TabPanel>


                <TabPanel value={value} index={3}>
                <Box border={1} width="100%" height={200}>
                        <Box width="100%" borderBottom={1} height={80}>
                            <Grid container
                                direction="row"
                                justifyContent="space-between"
                                alignItems="basline">

                                <h5>Tutar:</h5>
                                <h6>450TL</h6>
                                <h5>Sipariş Tarihi:</h5>
                                <h6>18.06.2022</h6>
                                <h5>Sipariş Özeti:</h5>
                                <h6>1 tesliamat, 1 ürün</h6>
                                <h5>Sipariş Alıcı:</h5>
                                <h6>Dilek Gül</h6>



                            </Grid>
                        </Box>

                        <Grid
                            container
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center">
                            <Typography color={"error"} variant='inherit' sx={{ marginTop: 5 }}> İptal edildi</Typography></Grid>
                        <Grid
                            container spacing={6}
                            direction="row"
                            justifyContent="center"
                            alignItems="center">
                            <Card sx={{ maxWidth: 70, maxHeight: 70, marginTop: "15px", marginLeft: "80px" }} >

                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="70"
                                        image="https://cdn.dsmcdn.com/ty745/product/media/images/20230224/22/288782808/287985406/1/1_org.jpg"
                                        alt="baharat"
                                    />
                                </CardActionArea>
                            </Card>
                            </Grid>

                
                </Box>
                </TabPanel>
            </Box>


        </div>
    )
}
