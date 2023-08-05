import React from 'react';
import {
    Box,
    Container,
    Grid,
    Link,
    Typography
} from '@mui/material';

import { WhatsApp, Facebook, Instagram } from '@mui/icons-material';

const Footer: React.FC = () => {

    return (
        <Box
            px={{ xs: 3, sm: 10 }}
            py={{ xs: 5, sm: 10 }}
            bgcolor='#111111'
            color='white'
        >
            <Container>
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={4}>
                        <Typography variant='h6'>Verifato</Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>Informações</Box>
                        <Box>
                            <Link href='/' color='inherit'>
                                Home
                            </Link>
                        </Box>
                        {/* <Box>
                            <Link href='/sobre' color='inherit'>
                                Sobre
                            </Link>
                        </Box> */}
                        <Box>
                            <Link href='/servicos' color='inherit'>
                                Serviços
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>Redes sociais</Box>
                        <Grid container>
                            <Box>
                                <Link href='/' color='inherit'>
                                    <WhatsApp />
                                </Link>
                            </Box>
                            <Box>
                                <Link href='/' color='inherit'>
                                    <Facebook />
                                </Link>
                            </Box>
                            <Box>
                                <Link href='/' color='inherit'>
                                    <Instagram />
                                </Link>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
                <Box
                    textAlign='center'
                    pt={{ xs: 5, sm: 10 }}
                    pb={{ xs: 5, sm: 10 }}
                >
                    Verifato &reg; {new Date().getFullYear()}
                </Box>
            </Container>
        </Box>
    )
}

export default Footer;