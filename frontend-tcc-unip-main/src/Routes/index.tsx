import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { GlobalStyles } from '@mui/material';
import { globalTheme } from '../Theme/globalTheme';

import Home from '../pages/Home';
import Sobre from '../pages/Sobre';
import Cadastro from '../pages/Cadastro';
import Servicos from '../pages/Servicos';

const Rotas: React.FC = () => {
    return (
        <ThemeProvider theme={globalTheme}>
            <GlobalStyles styles={{ body: { margin: 0 } }} />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/sobre' element={<Sobre />} />
                    <Route path='/cadastro' element={<Cadastro />} />
                    <Route path='/servicos' element={<Servicos />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default Rotas;
    