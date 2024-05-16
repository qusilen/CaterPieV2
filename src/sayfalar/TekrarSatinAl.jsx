import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, Card, CardActionArea, CardContent, CardMedia, FormControl, Grid, IconButton, InputLabel, MenuItem, Rating, Select, Stack } from '@mui/material';

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


export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        setAge(event.target.value);
    };
    const [age, setAge] = React.useState('');



    return (
        <Grid>
            <Box>
                <Typography marginLeft={76} mt={5} variant="h6">
                    TEKRAR SATIN ALIN
                </Typography>
                <Box sx={{ borderBottom: "1px solid black ", height: "40px", width: "1500px", marginInline: -3 }}>
                </Box>
            </Box>
            <Grid>
                <Box sx={{ marginLeft: "300px", width: '90%', mt: "30px" }}>
                    <Card sx={{ maxWidth: 215 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="250"
                                image="https://cdn.dsmcdn.com/ty281/product/media/images/20211229/10/17910100/346715585/1/1_org.jpg"
                                alt="pantalon"
                            />
                            <CardContent>
                                <Typography variant="caption" color="text.secondary">
                                    <h2> Koton</h2> Paçası Yırtık Straight Fit Kot Pantolon
                                    <Stack spacing={1}>
                                        <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly> </Rating>
                                    </Stack>
                                    <h2>150₺</h2>
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
                </Box>
            </Grid>
            <Grid>
                <Box sx={{ marginLeft: "300px", width: '90%', mt: "-515px", ml: "600px" }}>
                    <Card sx={{ maxWidth: 215 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="250"
                                image="https://cdn.dsmcdn.com/ty666/product/media/images/20221227/11/247456700/130314883/5/5_org_zoom.jpg"
                                alt="ayakkabı"
                            />
                            <CardContent>
                                <Typography variant="caption" color="text.secondary">
                                    <h2> Puma</h2> PumaSkye Clean - Unisex Beyaz Günlük Ayakkabı
                                    <Stack spacing={1}>
                                        <Rating name="half-rating-read" defaultValue={5} precision={4} readOnly> </Rating>
                                    </Stack>
                                    <h2>550₺</h2>
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
                                                <MenuItem value={37}>37</MenuItem>
                                                <MenuItem value={38}>38</MenuItem>
                                                <MenuItem value={39}>39</MenuItem>
                                            </Select>
                                        </FormControl>
                                        <Button size='small' sx={{ width: 60, color: "inherit", marginLeft: 3 }}>sepete ekle</Button>
                                    </Grid>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Box>
            </Grid>
            <Grid>
                <Box sx={{ marginLeft: "300px", width: '90%', mt: "-515px", ml: "900px" }}>
                    <Card sx={{ maxWidth: 215 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="250"
                                image="https://cdn.dsmcdn.com/mnresize/1200/1800/ty845/product/media/images/20230424/20/331457081/71335043/2/2_org_zoom.jpg"
                                alt="vp"
                            />
                            <CardContent>
                                <Typography variant="caption" color="text.secondary">
                                    <h2> Valorant</h2> 3400 VP Valorant Points
                                    <Stack spacing={1}>
                                        <Rating name="half-rating-read" defaultValue={5} precision={5} readOnly> </Rating>
                                    </Stack>
                                    <h2>230₺</h2>
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
                                                <MenuItem value={1}>Std</MenuItem>
                                            </Select>
                                        </FormControl>
                                        <Button size='small' sx={{ width: 60, color: "inherit", marginLeft: 3 }}>sepete ekle</Button>
                                    </Grid>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Box>
            </Grid>
            <Grid>
                <Box sx={{ marginLeft: "300px", width: '90%', mt: "30px" }}>
                    <Card sx={{ maxWidth: 215 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="250"
                                image="https://cdn.dsmcdn.com/mnresize/1200/1800/ty534/product/media/images/20220919/17/177040442/510564401/2/2_org_zoom.jpg"
                                alt="elbise"
                            />
                            <CardContent>
                                <Typography variant="caption" color="text.secondary">
                                    <h2> CaterPie</h2> Siyah Yaka Detaylı Simli Elbise
                                    <Stack spacing={1}>
                                        <Rating name="half-rating-read" defaultValue={5} precision={3} readOnly> </Rating>
                                    </Stack>
                                    <h2>330₺</h2>
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
                                                <MenuItem value={36}>36</MenuItem>
                                                <MenuItem value={38}>38</MenuItem>
                                                <MenuItem value={40}>40</MenuItem>
                                            </Select>
                                        </FormControl>
                                        <Button size='small' sx={{ width: 60, color: "inherit", marginLeft: 3 }}>sepete ekle</Button>
                                    </Grid>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Box>
            </Grid>
        </Grid>
    );
}