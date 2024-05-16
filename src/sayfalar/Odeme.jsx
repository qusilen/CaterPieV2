import React from 'react'
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, Card, Checkbox, FormControlLabel, Grid } from '@mui/material';
import AddHomeIcon from '@mui/icons-material/AddHome';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AddCardIcon from '@mui/icons-material/AddCard';
import PersonIcon from '@mui/icons-material/Person';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
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
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

export default function Odeme() {

    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <Box sx={{ bgcolor: 'background.paper', width: "630px", marginLeft: "400px", marginTop: "30px" }}>
                <AppBar position='static' >
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="secondary"
                        textColor="inherit"
                        variant="fullWidth"
                        aria-label="full width tabs example"
                    >
                        <Tab label="ADRES BİLGİLERİ" {...a11yProps(0)} />
                        <Tab label="ÖDEME SEÇENEKLERİ" {...a11yProps(1)} />
                    </Tabs>
                </AppBar>
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <Card sx={{ height: "400px", width: "630px", ml: "-24px" }}>
                        <Grid>
                            <Grid>
                                <Card sx={{ height: "100px", width: "250px", ml: "30px", mt: "30px" }}>
                                    <Button sx={{ height: "100px", width: "250px" }}>
                                        <AddHomeIcon />
                                        <Typography>
                                            Yeni Adres Ekle
                                        </Typography>
                                    </Button>
                                </Card>
                            </Grid>
                            <Grid>
                                <Card sx={{ height: "180px", width: "250px", mt: "30px", ml: "30px" }}>
                                    <Card sx={{ height: "200px", width: "250px" }}>
                                        <FormControlLabel
                                            sx={{ ml: "1px" }}
                                            value="end"
                                            control={<Checkbox />}
                                            label="Ev Adresim"
                                            labelPlacement="end"
                                        />
                                        <Typography variant='caption' sx={{ marginBottom: '50px' }}>
                                            <div><PersonIcon fontSize='small' />Esra Özkutlu</div>
                                            <div>DSM Grup Danışmanlık İletişim ve Satış Ticaret A.Ş. Maslak Mahallesi Saat Sokak Spine Tower No:5 İç Kapı No:19 Sarıyer/İstanbul</div>
                                            <div>0 212 331 0 200</div>
                                        </Typography>
                                    </Card>
                                </Card>
                            </Grid>

                            <Grid>
                                <Card sx={{ height: "180px", width: "250px", mt: "-180px", ml: "350px" }}>
                                    <Card sx={{ height: "200px", width: "250px" }}>
                                        <FormControlLabel
                                            sx={{ ml: "1px" }}
                                            value="end"
                                            control={<Checkbox />}
                                            label="İş Adresim"
                                            labelPlacement="end"
                                        />
                                        <Typography variant='caption' sx={{ marginBottom: '50px' }}>
                                            <div><PersonIcon fontSize='small' />Esra Özkutlu</div>
                                            <div>DSM Grup Danışmanlık İletişim ve Satış Ticaret A.Ş. Maslak Mahallesi Saat Sokak Spine Tower No:5 İç Kapı No:19 Sarıyer/İstanbul</div>
                                            <div>0 212 331 0 200</div>
                                        </Typography>
                                    </Card>
                                </Card>
                            </Grid>

                        </Grid>
                    </Card>
                </TabPanel>

                <TabPanel value={value} index={1} dir={theme.direction}>
                    <Card sx={{ height: "420px", width: "630px", ml: "-24px" }}>
                        <Grid>
                            <Grid>
                                <Card sx={{ height: "100px", width: "250px", ml: "30px", mt: "30px" }}>
                                    <Button sx={{ height: "100px", width: "250px" }}>
                                        <AddCardIcon />
                                        <Typography>
                                            Yeni Kart Ekle
                                        </Typography>
                                    </Button>
                                </Card>
                            </Grid>
                            <Grid>
                                <Card sx={{ height: "100px", width: "250px", mt: "30px", ml: "30px" }}>
                                    <Card sx={{ height: "200px", width: "250px" }}>
                                        <FormControlLabel
                                            sx={{ ml: "1px" }}
                                            value="end"
                                            control={<Checkbox />}
                                            label="Papara Kartım"
                                            labelPlacement="end"
                                        />
                                        <Typography variant='caption' sx={{ marginBottom: '50px' }}>
                                            <div><CreditCardIcon fontSize='small' /> 4873 98** **** 3985 </div>
                                            <div>23/2026</div>
                                        </Typography>
                                    </Card>
                                </Card>
                            </Grid>
                            <Grid>
                                <Card sx={{ height: "100px", width: "250px", mt: "-100px", ml: "350px" }}>
                                    <Card sx={{ height: "200px", width: "250px" }}>
                                        <FormControlLabel
                                            sx={{ ml: "1px" }}
                                            value="end"
                                            control={<Checkbox />}
                                            label="Bonus Kartım"
                                            labelPlacement="end"
                                        />
                                        <Typography variant='caption' sx={{ marginBottom: '50px' }}>
                                            <div><CreditCardIcon fontSize='small' /> 3453 43** **** 8434</div>
                                            <div>31/2034</div>
                                        </Typography>
                                    </Card>
                                </Card>
                            </Grid>
                            <Grid>
                                <Card sx={{ height: "100px", width: "250px", mt: "30px", ml: "30px" }}>
                                    <Card sx={{ height: "200px", width: "250px" }}>
                                        <FormControlLabel
                                            sx={{ ml: "1px" }}
                                            value="end"
                                            control={<Checkbox />}
                                            label="Akbank Kartım"
                                            labelPlacement="end"
                                        />
                                        <Typography variant='caption' sx={{ marginBottom: '50px' }}>
                                            <div><CreditCardIcon fontSize='small' /> 4578 92** **** 5435</div>
                                            <div>16/2057</div>
                                        </Typography>
                                    </Card>
                                </Card>
                            </Grid>
                        </Grid>
                    </Card>
                    <Grid>
                        <Card sx={{ height: "50px", width: "200px", ml: "380px", mt: "20px" }}>
                            <Button sx={{ height: "50px", width: "200px" }}>
                                <Typography>
                                    ÖDEME YAP
                                </Typography>
                            </Button>
                        </Card>
                    </Grid>
                </TabPanel>
            </Box>
        </div >
    )
}