import { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Badge from '@mui/material/Badge';
import Flag from 'react-world-flags';
import { BsChevronExpand, BsSearch } from "react-icons/bs";
import { FiShoppingBag } from "react-icons/fi";

import "../styles/navbar.scss"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        primary: { main: grey[900] },
    },
});

const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const logo = "https://chawkbazar.vercel.app/assets/images/logo.svg";
    return (
        <ThemeProvider theme={theme}>
            <div className="nav-container">
                <div className="nav-left">
                    <img src={logo} alt="Logo" className="nav-logo" />
                    <ul className="nav-list">
                        <li className="nav-item">Mens Wear</li>
                        <li className="nav-item">Womens Wear</li>
                        <li className="nav-item">Search</li>
                        <li className="nav-item">Shops</li>
                    </ul>
                </div>
                <div className="nav-right">
                    <div>
                        <Button
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            <Flag height={20} code='US' />
                            English - EN
                            <BsChevronExpand />
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={handleClose}>
                                <Flag height={20} code='IN' />
                                Hindi
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <Flag height={20} code='ES' />
                                Espanol
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <Flag height={20} code='JP' />
                                Japanese
                            </MenuItem>
                        </Menu>
                    </div>
                    <BsSearch />
                    <p className='nav-item'>Sign In</p>
                    <Badge badgeContent={4} color="primary">
                        <FiShoppingBag />
                    </Badge>
                </div>
            </div>
        </ThemeProvider>
    )
}

export default Navbar;