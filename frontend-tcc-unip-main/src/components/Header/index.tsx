import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    AppBar,
    Box,
    Button,
    Container,
    Menu,
    MenuItem,
    Toolbar,
    Typography
} from '@mui/material';

const Header: React.FC = () => {
    let navigate = useNavigate();
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleNavigation = (path: string) => {
        navigate(path);
    }

    return (
        <AppBar position='static' sx={{
            backgroundColor: '#111111'
        }}>
            <Container maxWidth={false}>
                <Toolbar disableGutters sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                }}>
                    <Typography
                        component='button'
                        onClick={() => handleNavigation('/')}
                        variant='h5'
                        sx={{
                            color: 'white',
                            textDecoration: 'none',
                            letterSpacing: '.3rem',
                            fontWeight: 700,
                            fontFamily: 'Roboto',
                            background: 'transparent',
                            border: 'none',
                            cursor: 'pointer',
                        }}
                    >
                        Verifato
                    </Typography>
                    <Box>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">Sobre</Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">Serviços</Typography>
                            </MenuItem>

                        </Menu>

                    </Box>

                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                    }}>
                        {/* <Button
                            onClick={() => handleNavigation('/sobre')}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            Sobre
                        </Button> */}
                        <Button
                            onClick={() => handleNavigation('/servicos')}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            Serviços
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;