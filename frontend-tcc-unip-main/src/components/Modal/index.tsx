import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import {
    Box,
    Modal,
    Typography,
    useMediaQuery
} from '@mui/material';

ChartJS.register(ArcElement, Tooltip, Legend);


type ModalResultadoProps = {
    show: boolean,
    handleShow: (error: boolean) => void,
    probabilty: number,
    linksRelacionados: string[],
    temas: string[]
}

type ChartDataProps = {
    labels: string[],
    datasets: {
        label: string,
        data: number[],
        backgroundColor: string[],
        borderColor: string[],
        borderWidth: number
    }[],
}

const ModalResultado: React.FC<ModalResultadoProps> = ({ 
    show, handleShow, probabilty, linksRelacionados, temas  
}) => {
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    const chartData: ChartDataProps = {
        labels: ['verdadeiro', 'falso'],
        datasets: [
            {
                label: 'Probabilidade',
                data: [1 - probabilty, probabilty],
                backgroundColor: [
                    'rgb(94, 226, 84)',
                    'rgb(238, 81, 81)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 0,
            }
        ],
    }
    const desktop = useMediaQuery('(min-width:600px)');


    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        minWidth: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        borderRadius: '4px',
        p: 4,
        // overflow: 'scroll'
    };

    useEffect(() => {
        if (show) {
            setOpen(true);
        }
    }, [show])

    return (
        <div>
            <Modal
                open={show}
                onClose={handleShow}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h5" component="h2">
                        Resultados
                    </Typography>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: '8px'
                    }}>
                        <Box sx={{
                            width: '300px',
                        }}>
                            <Pie data={chartData} />
                        </Box>
                    </Box>
                    <Box>
                        <Typography variant="h6" component="h2" sx={{ margin: '8px 0' }}>
                            Temas da notícia: 
                        </Typography>
                        {temas.map(tema => (
                            <Typography component="p" key={tema}>- {tema}</Typography>
                        ))}
                    </Box>

                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        <Typography variant="h6" component="h2" sx={{ margin: '8px 0' }}>
                            Links relacionados:
                        </Typography>
                        {linksRelacionados.map(link => (
                            <Typography key={link} component="a" href={link}
                            target="_blank"
                            sx={{
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                width: '40ch',
                                whiteSpace: 'nowrap',
                                margin: '4px 0'
                            }}>
                                {link}
                            </Typography>
                        ))}
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}

export default ModalResultado;
