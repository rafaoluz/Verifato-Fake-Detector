import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import toast, { Toaster } from 'react-hot-toast';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker'
import {
    Backdrop,
    Box,
    Button,
    CircularProgress,
    Container,
    Paper,
    Stack,
    TextField,
    Typography,
    useMediaQuery
} from '@mui/material';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ModalResultado from '../../components/Modal';
import api from '../../services/api';
import '../../Theme/common.css';

type IFormInputs = {
    titulo: string,
    link: string,
    dataNoticia: string,
    texto: string,
    tipoAnalise: string
}

const schema = yup.object({
    titulo: yup.string().max(100, "Titulo não pode ultrapassar o limite de 100 caracteres"),
    link: yup.string().max(200, "Link não pode ultrapassar o limite de 200 caracteres"),
    dataNoticia: yup.string().required(),
    texto: yup.string().min(100, "O texto precisa ter no mínimo 100 caracteres").max(2500, "O texto da notícia não pode ultrapassar 2500 caracteres").required("Texto é obrigatório"),
}).required();

const Servicos: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInputs>({
        resolver: yupResolver(schema)
    });
    const [dateValue, setDateValue] = useState<Date | null>();
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [probability, setProbability] = useState(0);
    const [themes, setThemes] = useState<string[]>([]);
    const [links, setLinks] = useState<string[]>([]);
    const desktop = useMediaQuery('(min-width:600px)');

    // useEffect(() => {
    //     if (loading === true) {
    //         setTimeout(handleLoading, 5000);
    //     }
    // }, [loading]);

    const handleForm = async (formData: IFormInputs) => {
        setLoading(true);
        console.log(formData);
        setThemes([]);
        setProbability(0);
        setLinks([]);


        await api.post('/disinformation//', {
            "key": "",
            "link": formData.link,
            "text": '@verifato ' + formData.texto,
            "title": formData.titulo,
            "choice": formData.tipoAnalise,
            "date": '2022-10-09',
            "user": null
        })
            .then(response => {
                handleThemes(response.data.themes);
                setProbability(response.data.probability);
                handleLinksRelacionados(response.data.similarity);
                handleLoading();
                console.log('essa é a resposta', response.data);
            })
            .catch(error => {
                setLoading(false);
                toast.error(error.response.data.text[0]);
            })
    }

    const handleDateChange = (newValue: Date | null) => {
        setDateValue(newValue);
    };

    const handleLoading = () => {
        return (
            setLoading(false),
            setShowModal(!showModal)
        );
    };

    const handleThemes = (temas: any) => {
        Object.keys(temas).map(theme => {
            console.log('TEMA VERIFICADO', theme);
            switch (theme) {
                case 'T01':
                    setThemes(current => [...current, 'Origem e propagação da COVID-19']);
                    break;
                case 'T02':
                    setThemes(current => [...current, 'Estatísticas falsa e equivocadas']);
                    break;
                case 'T03':
                    setThemes(current => [...current, 'Impactos econômicos']);
                    break;
                case 'T04':
                    setThemes(current => [...current, 'Desacreditar jornalistas']);
                    break;
                case 'T05':
                    setThemes(current => [...current, 'Ciência médica']);
                    break;
                case 'T06':
                    setThemes(current => [...current, 'Impactos na sociedade e no meio ambiente']);
                    break;
                case 'T07':
                    setThemes(current => [...current, 'Politização']);
                    break;
                case 'T08':
                    setThemes(current => [...current, 'Conteúdo impulsionado para fraudes financeira']);
                    break;
                default:
                    setThemes(current => [...current, 'Desinformação focada em celebridade']);
            }
        })


    }

    const handleLinksRelacionados = (similarity: any) => {
        Object.values(similarity).map((obj: any) => {
            setLinks(current => [...current, obj.link]);
        })
    }

    return (
        <>
            <Header />

            <Box>
                <Paper elevation={2} sx={{
                    minHeight: '800px',
                    padding: '24px',
                }} >
                    <Container sx={{ height: '100%' }} component='main' maxWidth='xs'>
                        <Typography component='h5' variant='h5'>
                            Realize sua Análise
                        </Typography>

                        <form className='servico-form' noValidate onSubmit={handleSubmit((data) => handleForm(data))}>
                            <Stack spacing={6}>
                                <TextField
                                    variant='outlined'
                                    margin='normal'
                                    {...register('titulo')}
                                    fullWidth
                                    id='titulo'
                                    label={errors.titulo ? errors.titulo.message : 'Título'}
                                    name='titulo'
                                    error={errors.titulo ? true : false}
                                />

                                <TextField
                                    variant='outlined'
                                    margin='normal'
                                    {...register('link')}
                                    fullWidth
                                    id='link'
                                    label={errors.link ? errors.link.message : 'Link da Notícia'}
                                    name='link'
                                    error={errors.link ? true : false}
                                />

                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    {desktop
                                        ? <DesktopDatePicker
                                            label='Data da Notícia'
                                            inputFormat='dd/MM/yyyy'
                                            {...register('dataNoticia')}
                                            value={dateValue}
                                            onChange={handleDateChange}
                                            renderInput={(params) => <TextField {...params} />}
                                        />

                                        : <MobileDatePicker
                                            label='Data da Notícia'
                                            inputFormat='dd/MM/yyyy'
                                            {...register('dataNoticia')}
                                            value={dateValue}
                                            onChange={handleDateChange}
                                            renderInput={(params) => <TextField {...params} />}
                                        />}
                                </LocalizationProvider>

                                <TextField
                                    variant='outlined'
                                    margin='normal'
                                    multiline
                                    minRows={8}
                                    {...register('texto')}
                                    fullWidth
                                    id='texto'
                                    label={errors.texto ? errors.texto.message : 'Texto da Notícia'}
                                    name='texto'
                                    error={errors.texto ? true : false}
                                />

                                <Button
                                    type='submit'
                                    fullWidth
                                    variant='contained'
                                    color='primary'
                                >
                                    Enviar
                                </Button>
                                <Backdrop
                                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1, margin: '0 !important' }}
                                    open={loading}
                                >
                                    <CircularProgress color="inherit" />
                                </Backdrop>
                            </Stack>
                        </form>
                        <Toaster />
                    </Container>
                </Paper>
            </Box>
            <ModalResultado 
                show={showModal}
                handleShow={handleLoading}
                probabilty={probability}
                temas={themes}
                linksRelacionados={links}
            />

            <Footer />
        </>
    )
}

export default Servicos;
