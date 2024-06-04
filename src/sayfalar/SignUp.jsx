import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, IconButton, Input, InputAdornment, InputLabel, Link, Radio, RadioGroup, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { object, string, ref } from 'yup';
import { useFormik } from 'formik';

    object({
    email: string().email("Lütfen e-posta adresinizi geçerli formatta giriniz").required("Bu alan zorunludur"),
    password: string().min(5, "Minimum karakter sayısı 5").required("Bu alan zorunludur"),
})

  

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

export default function FullWidthTabs( ) {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (
        <>
            <Typography marginLeft={"600px"} marginTop={"10px"} fontSize={"30px"} fontStyle={"oblique"}>Cater Pie'a Hoşgeldiniz</Typography>
            <Typography marginLeft={"550px"} fontStyle={'oblique'}>Daha iyi Bir deneyim için hemen giriş yapın veya üye olun.</Typography>
            <Box sx={{ bgcolor: 'background.paper', width: 500, marginLeft: "500px", marginTop: "30px"  }}>
                <AppBar position='static' >
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="secondary"
                        textColor="inherit"
                        variant="fullWidth"
                        aria-label="full width tabs example"
                    >
                        <Tab label="Giriş Yap" {...a11yProps(0)} />
                        <Tab label="Üye Ol" {...a11yProps(1)} />
                    </Tabs>
                </AppBar>
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <TextField id="email" 
                    label="E posta" 
                    variant="standard" sx={{ width: "50ch", m: 1 }} />
                    <FormControl sx={{ m: 1, width: '50ch' }} variant="standard" >
                        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                        <Input
                            id="standard-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="start">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />

                    </FormControl>
                    <Link href='/giris/sifremi_unuttum' sx={{ marginLeft: "335px" }}>Şifremi Unuttum</Link>
                    <Button
                        variant='outlined'
                        sx={{ width: 450, height: 50, marginTop: "20px" }}
                        href='/'
                    >Giriş Yap</Button>
                </TabPanel>
//Kayıt Ol
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <TextField 
                    id="email"
                    label="E posta" 
                    variant="standard" 
                    sx={{ width: "50ch",  m: 1 }} />
                    <FormControl sx={{ m: 1, width: '50ch' }} variant="standard" >
                        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                        <Input
                            id="standard-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="start">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />

                    </FormControl>
                    <Typography variant="caption">şifreniz en az 5 karakter ve en fazla 64 karakter olmalı, harf ve
                        rakam içermelidir.</Typography>

                    <FormControl sx={{marginLeft:1}}>
                        <FormLabel sx={{ marginTop: 5 }} id="demo-row-radio-buttons-group-label">Cinsiyet</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel value="female" control={<Radio />} label="Kadın" />
                            <FormControlLabel value="male" control={<Radio />} label="Erkek" />
                            <FormControlLabel value="other" control={<Radio />} label="Belirtmek istemiyorum" />

                        </RadioGroup>
                    </FormControl>
                    <FormGroup sx={{marginTop:5}}>
                        <FormControlLabel control={<Checkbox defaultChecked />} 
                        label="Kampanyalardan haberdar olabilmek için kişisel verilerimin
                        işlenmesini ve tarafıma elektronik ileti gönderilmesini kabul
                        ediyorum-" />
                        <FormControlLabel required control={<Checkbox />} label="Kişisel verilerimin işlenmesine yönelik aydınlatma metnini
                        okudum ve anladım." />
                    </FormGroup>
                    <Button
                        variant='outlined'
                        sx={{ width: 450, height: 50, marginTop: "20px" }}
                        href='/'
                    >üye ol</Button>                </TabPanel>
            </Box>
        </>);
}