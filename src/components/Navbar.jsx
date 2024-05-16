import { AppBar, Toolbar, Typography, styled, InputBase, IconButton, Menu, MenuItem, Button, Fade, Link, CardMedia } from '@mui/material'
import ShoppingBagTwoToneIcon from '@mui/icons-material/ShoppingBagTwoTone';
import React, { useState } from 'react'
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginIcon from '@mui/icons-material/Login';
import FavoriteIcon from '@mui/icons-material/Favorite';
import WidgetsIcon from '@mui/icons-material/Widgets';

const StyledToolBar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#f27a1a",
});
const Items = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#f27a1a",

});
const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "20%"
}));
const Icons = styled("box")(({ theme }) => ({
    display: "none",
    alignItems: "center",
    gap: "20px",
    color: "white",
    [theme.breakpoints.up("sm")]: {
        display: "flex"
    }
}));
const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));

export const Navbar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position='sticky'>
            <StyledToolBar>
                <Button href='/' color='inherit'>
                    <CardMedia
                        component="img"
                        height="100"
                        image="https://media.discordapp.net/attachments/1084902952747147404/1108824644963795014/ESRA_001.png?width=1440&height=576"
                        alt="ayakkabı">

                    </CardMedia></Button>
                <ShoppingBagTwoToneIcon sx={{ display: { xs: "block", sm: "none" } }} />
                <Search><InputBase placeholder='search..' /></Search>
                <Icons>

                    <Link to="/cpdeck">
                        <Button href='/cpdeck'>
                            <IconButton aria-label="cart">

                                <StyledBadge color="secondary">
                                    <WidgetsIcon />
                                    <Typography>CaterPieDeck</Typography>
                                </StyledBadge>
                            </IconButton>
                        </Button>
                    </Link>

                    <Link to="/favoriler">
                        <Button href='/favoriler'>
                            <IconButton aria-label="cart">

                                <StyledBadge color="secondary">
                                    <FavoriteIcon />
                                    <Typography>Favorilerim</Typography>
                                </StyledBadge>
                            </IconButton>
                        </Button>
                    </Link>

                    <Link to="/sepetim">
                        <Button href='/sepetim'>
                            <IconButton aria-label="cart">
                                <StyledBadge color="secondary">
                                    <ShoppingCartIcon />
                                    <Typography>Sepetim</Typography>
                                </StyledBadge>
                            </IconButton>

                        </Button>
                    </Link>
                    <Link to="/giris">
                        <Button href="/giris">
                            <IconButton
                                aria-label="cart"
                            >

                                <StyledBadge color="secondary">
                                    <LoginIcon />
                                    <Typography>Giriş Yap</Typography>


                                </StyledBadge>
                            </IconButton>
                        </Button>
                    </Link>
                </Icons>
            </StyledToolBar>
            <Items>
                <Button
                    startIcon color='inherit'
                    id="kadin_giyim"
                    aria-controls={open ? 'kadin_giyim' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    Kadın Giyim

                </Button>
                <Button
                    color='inherit'
                    id="fade-button"
                    aria-controls={open ? 'erkek_giyim' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'false' : undefined}
                    onClick={handleClick}
                >Erkek Giyim</Button>
                <Button color='inherit'
                    id="fade-button"
                    aria-controls={open ? 'ayakkabi_canta' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}>
                    Ayakkabı&çanta
                </Button>
                <Button color='inherit'
                    id="fade-button"
                    aria-controls={open ? 'elektronik' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}>
                    elektronik
                </Button>
                <Button color='inherit'
                    id="fade-button"
                    aria-controls={open ? 'spor_outdoor' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}>
                    Spor&outdoor
                </Button>
                <Button color='inherit'
                    id="fade-button"
                    aria-controls={open ? 'çok_satanlar' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}>
                    çok satanlar
                </Button>


            </Items>

            <Menu
                id="kadin_giyim"
                MenuListProps={{
                    'aria-labelledby': 'kadin_giyim',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >

                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>Çanta</MenuItem>
                <MenuItem onClick={handleClose}>Ayakkabı</MenuItem>

            </Menu>


        </AppBar>
    )
}