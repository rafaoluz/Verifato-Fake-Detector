import React from 'react';
import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Typography,
    useMediaQuery
} from '@mui/material';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Perguntas from '../../components/Accordion';

const Home: React.FC = () => {
    const desktop = useMediaQuery('(min-width:600px)');

    return (
        <>
            <Header />

            <Card elevation={0} square>
                <CardMedia
                    component='img'
                    height='500'
                    image='https://verifato.vercel.app/img/machine-redimensionado.jpg'
                    alt='robo1'
                />
                <CardContent sx={{
                    minHeight: '300px',
                    backgroundColor: '#111111',
                    color: '#b2b2b2',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Typography
                        gutterBottom
                        variant="h3"
                        component="div"
                        textAlign='center'
                        fontWeight='bold'
                        color='#FFF'
                    >
                        Saiba Mais .
                    </Typography>
                    <Typography
                        variant='h5'
                        paragraph
                        fontSize={desktop ? '1.5rem' : '1.125rem'}
                        sx={{
                            height: '60%',
                            maxWidth: '1160px'
                        }}
                    >
                        Deep learning é um tipo de machine learning que treina
                        computadores para realizar tarefas como seres humanos,
                        o que inclui reconhecimento de fala, identificação de
                        imagem e previsões. Em vez de organizar os dados para
                        serem executados através de equações predefinidas, o
                        deep learning configura parâmetros básicos sobre os
                        dados e treina o computador para aprender sozinho
                        através do reconhecimento padrões em várias camadas de
                        processamento.
                    </Typography>

                </CardContent>
            </Card>

            <Card
                sx={{
                    display: 'flex',
                    flexDirection: `${desktop ? 'row' : 'column'}`
                }}
                elevation={0}
                square
            >
                <CardMedia
                    component='img'
                    height='600'
                    image='https://verifato.vercel.app/img/ia.jpg'
                    alt='robo2'
                />
                <CardContent sx={{
                    backgroundColor: '#ffbb00'
                }}>
                    <Typography
                        variant='h5'
                        paragraph
                        sx={{
                            padding: `${desktop ? '40px 40px 80px 80px' : '20px 20px 40px 40px'}`,

                            alignSelf: 'end'
                        }}>
                        "A Inteligência Artificial é a ciência que permite a
                        sistemas (máquinas) a capacidade de aprender, perceber,
                        tomar decisões e resolver problemas através da
                        construção de instrumentos e mecanismos que apoiam a
                        inteligência humana."
                    </Typography>

                    <Typography variant='h5' sx={{
                        padding: `${desktop ? '40px 40px 80px 80px' : '20px 20px 40px 40px'}`,
                        alignSelf: 'end',
                        color: '#664400'
                    }}>D. Durães</Typography>

                </CardContent>
            </Card>

            <Box>
                <Typography
                    variant='h3'
                    textAlign='center'
                    fontWeight='bold'
                    margin='24px 0'
                >Perguntas Frequentes .</Typography>
                <Perguntas />
            </Box>

            <Footer />
        </>
    )
}

export default Home;
