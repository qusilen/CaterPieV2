import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, Card, CardActionArea, CardContent, CardMedia, FormControl, Grid, IconButton, InputLabel, MenuItem, Rating, Select, Stack } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

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

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        setAge(event.target.value);
    };
    const [age, setAge] = React.useState('');



    return (
        <Box sx={{ marginLeft: "100px", width: '90%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label=
                        {<IconButton aria-label="cart">
                            <FavoriteIcon />
                            <Typography>Favorilerim</Typography>
                        </IconButton>} />
                </Tabs>
            </Box>
            <Grid
                container 
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
            >

                <TabPanel value={value} index={0}>
                    <Card sx={{ maxWidth: 200 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="250"
                                image="https://cdn.dsmcdn.com/ty281/product/media/images/20211229/10/17910100/346715585/1/1_org.jpg"
                                alt="pantalon"
                            />
                            <CardContent>
                                <Typography variant="caption" color="text.secondary">
                                    <h4> Koton</h4> Paçası Yırtık Straight Fit Kot Pantolon
                                    <Stack spacing={1}>
                                        <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly> </Rating>
                                    </Stack>
                                    <h4>fiyat bilgisi</h4>
                                    <Grid
                                        container spacing={1}
                                        direction="row"
                                        justifyContent="flex-start"
                                        alignItems="flex-end"
                                    >
                                        <FormControl sx={{ m: 1, minWidth: 70 }} size="small">
                                            <InputLabel id="demo-select-small-label">Beden</InputLabel>
                                            <Select
                                                labelId="demo-select-small-label"
                                                id="demo-select-small"
                                                value={age}
                                                label="Age"
                                                onChange={handleChange}
                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={32 / 32}>32/32</MenuItem>
                                                <MenuItem value={20}>31/32</MenuItem>
                                                <MenuItem value={30}>30/32</MenuItem>
                                            </Select>
                                        </FormControl>
                                        <Button size='small' sx={{ width: 60, color: "inherit", marginLeft: 3 }}>sepete ekle</Button>
                                    </Grid>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </TabPanel>
        
            <TabPanel value={value} index={0}>
                <Card sx={{ maxWidth: 200 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="250"
                            image="https://cdn.dsmcdn.com/ty181/product/media/images/20210920/17/134233331/228529131/1/1_org.jpg"
                            alt="pantalon"
                        />
                        <CardContent>
                            <Typography variant="caption" color="text.secondary">
                                <h4> CaterMia</h4> Siyah Oversize Düğmeli Kaşe Kaban
                                <Stack spacing={1}>
                                    <Rating name="half-rating-read" defaultValue={4.1} precision={0.5} readOnly> </Rating>
                                </Stack>
                                <h4>fiyat bilgisi</h4>
                                <Grid
                                    container spacing={1}
                                    direction="row"
                                    justifyContent="flex-start"
                                    alignItems="flex-start"
                                >
                                    <FormControl sx={{ m: 1, minWidth: 70 }} size="small">
                                        <InputLabel id="demo-select-small-label">Beden</InputLabel>
                                        <Select
                                            labelId="demo-select-small-label"
                                            id="demo-select-small"
                                            value={age}
                                            label="Age"
                                            onChange={handleChange}
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={32 / 32}>xs</MenuItem>
                                            <MenuItem value={20}>s</MenuItem>
                                            <MenuItem value={30}>m</MenuItem>
                                            <MenuItem value={40}>l</MenuItem>
                                            <MenuItem value={50}>xl</MenuItem>

                                        </Select>
                                    </FormControl>
                                    <Button size='small' sx={{ width: 60, color: "inherit", marginLeft: 3 }}>sepete ekle</Button>
                                </Grid>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </TabPanel>

             
            <TabPanel value={value} index={0}>
                <Card sx={{ maxWidth: 200 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="270"
                            image="https://cdn.dsmcdn.com/ty533/product/media/images/20220912/12/174342655/568033735/1/1_org.jpg"
                            alt="pantalon"
                        />
                        <CardContent>
                            <Typography variant="caption" color="text.secondary">
                                <h4> Schafer</h4> Iron Man Çelik Termos 450ml
                                <Stack spacing={1}>
                                    <Rating name="half-rating-read" defaultValue={3.6} precision={0.1} readOnly> </Rating>
                                </Stack>
                                <h4>fiyat bilgisi</h4>
                                <Grid
                                    container spacing={1}
                                    direction="row"
                                    justifyContent="flex-start"
                                    alignItems="flex-start"
                                >
                                    <FormControl sx={{ m: 1, minWidth: 70 }} size="small">
                                        <InputLabel id="demo-select-small-label">Beden</InputLabel>
                                        <Select
                                            labelId="demo-select-small-label"
                                            id="demo-select-small"
                                            value={age}
                                            label="Age"
                                            onChange={handleChange}
                                        >
                                            <MenuItem value="">
                                                <em>Tek Ebat</em>
                                            </MenuItem>
                                        </Select>
                                    </FormControl>
                                    <Button size='small' sx={{ width: 60, color: "inherit", marginLeft: 3 }}>sepete ekle</Button>
                                </Grid>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </TabPanel>

             
            <TabPanel value={value} index={0}>
                <Card sx={{ maxWidth: 200 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="250"
                            image="https://cdn.dsmcdn.com/ty736/product/media/images/20230217/18/282798922/198516762/1/1_org.jpg"
                            alt="kemer"
                        />
                        <CardContent>
                            <Typography variant="caption" color="text.secondary">
                                <h4> Defacto</h4> Kadın Suni Deri 3'lü Elbise Kemeri
                                <Stack spacing={1}>
                                    <Rating name="half-rating-read" defaultValue={4.1} precision={0.5} readOnly> </Rating>
                                </Stack>
                                <h4>fiyat bilgisi</h4>
                                <Grid
                                    container spacing={1}
                                    direction="row"
                                    justifyContent="flex-start"
                                    alignItems="flex-start"
                                >
                                    <FormControl sx={{ m: 1, minWidth: 70 }} size="small">
                                        <InputLabel id="demo-select-small-label">Beden</InputLabel>
                                        <Select
                                            labelId="demo-select-small-label"
                                            id="demo-select-small"
                                            value={age}
                                            label="Age"
                                            onChange={handleChange}
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={32 / 32}>80</MenuItem>
                                            <MenuItem value={20}>85</MenuItem>
                                            <MenuItem value={30}>90</MenuItem>
                                            <MenuItem value={30}>95</MenuItem>
                                            <MenuItem value={30}>100</MenuItem>



                                        </Select>
                                    </FormControl>
                                    <Button size='small' sx={{ width: 60, color: "inherit", marginLeft: 3 }}>sepete ekle</Button>
                                </Grid>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </TabPanel>

             
            <TabPanel value={value} index={0}>
                <Card sx={{ maxWidth: 200 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="250"
                            image="https://cdn.dsmcdn.com/ty105/product/media/images/20210426/17/83138179/2337770/1/1_org.jpg"
                            alt="maskara"
                        />
                        <CardContent>
                            <Typography variant="caption" color="text.secondary">
                                <h4> Maybelline</h4> New York Siyah Maskara
                                <Stack spacing={1}>
                                    <Rating name="half-rating-read" defaultValue={4.1} precision={0.5} readOnly> </Rating>
                                </Stack>
                                <h4>fiyat bilgisi</h4>
                                <Grid
                                    container spacing={1}
                                    direction="row"
                                    justifyContent="flex-start"
                                    alignItems="flex-start"
                                >
                                    <FormControl sx={{ m: 1, minWidth: 70 }} size="small">
                                        <InputLabel id="demo-select-small-label">Beden</InputLabel>
                                        <Select
                                            labelId="demo-select-small-label"
                                            id="demo-select-small"
                                            value={age}
                                            label="Age"
                                            onChange={handleChange}
                                        >
                                            <MenuItem value="">
                                                <em>Tek Beden</em>
                                            </MenuItem>
                                           
                                        </Select>
                                    </FormControl>
                                    <Button size='small' sx={{ width: 60, color: "inherit", marginLeft: 3 }}>sepete ekle</Button>
                                </Grid>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </TabPanel>

             
           
            </Grid>
        </Box>

    );
}