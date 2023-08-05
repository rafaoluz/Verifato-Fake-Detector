import React from 'react';
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Box,
    Typography
} from '@mui/material';

import { ExpandMore } from '@mui/icons-material';

const Perguntas: React.FC = () => {
    return (
        <Box sx={{ margin: '24px 0 40px 0' }}>
            <Accordion square={true}>
                <AccordionSummary
                    expandIcon={<ExpandMore />}
                    id='panel1a-header'
                    aria-controls='panel1a-content'
                >
                    <Typography fontWeight='bold'>Porque usar Python?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Quando muitas pessoas estão trabalhando em volta do código,
                        é essencial que a linguagem do programa inteiro seja
                        compreendida muito bem por todos, para o desenvolvedor até
                        o testador e por todo mundo no meio. Python é uma linguagem
                        conveniente para todo mundo.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion square={true}>
                <AccordionSummary
                    expandIcon={<ExpandMore />}
                    id='panel2a-header'
                    aria-controls='panel2a-content'
                >
                    <Typography fontWeight='bold'>Qual o beneficio da cloud?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        O desenvolvimento na cloud permite que os usuários
                        comercializem seus aplicativos mais rapidamente. As falhas
                        de hardware não resultam em uma perda de dados devido a
                        backups em rede. A cloud computing usa recursos remotos,
                        fazendo com que as empresas economizem no custo de
                        servidores e outros equipamentos.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion square={true}>
                <AccordionSummary
                    expandIcon={<ExpandMore />}
                    id='panel3a-header'
                    aria-controls='panel3a-content'
                >
                    <Typography fontWeight='bold'>Porque ocorrem as fake news?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Este tipo de notícia é escrito e publicado com a intenção
                        de enganar, a fim de se obter ganhos financeiros ou
                        políticos, muitas vezes com manchetes sensacionalistas,
                        exageradas ou evidentemente falsas para chamar a atenção.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion square={true}>
                <AccordionSummary
                    expandIcon={<ExpandMore />}
                    id='panel3a-header'
                    aria-controls='panel3a-content'
                >
                    <Typography fontWeight='bold'>O que é Django?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Django é um framework web Python de alto nível que permite
                        o rápido desenvolvimento de sites seguros e de fácil
                        manutenção.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion square={true}>
                <AccordionSummary
                    expandIcon={<ExpandMore />}
                    id='panel3a-header'
                    aria-controls='panel3a-content'
                >
                    <Typography fontWeight='bold'>O que é React?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        É uma biblioteca JavaScript de código aberto com foco em
                        criar interfaces de usuário em páginas web. É mantido pelo
                        Facebook, Instagram, outras empresas e uma comunidade de
                        desenvolvedores individuais. É utilizado nos sites da
                        Netflix, Imgur, Feedly, Airbnb, SeatGeek, HelloSign,
                        Walmart e outros.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
}

export default Perguntas;