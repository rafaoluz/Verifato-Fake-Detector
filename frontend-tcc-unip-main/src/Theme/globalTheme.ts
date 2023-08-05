import { createTheme } from '@mui/material/styles';

export const globalTheme = createTheme({
    palette: {
        primary: {
            main: '#ffbb00',
            "100": '#e4a30b',
            "200": '#a66f00',
            "300": ' #664400',
            "400": '#332200',
        },
        secondary: {
            main: '#ffffff',
            "100": '#f7f7f7',
            "200": '#ededed;',
            "300": ' #111111',
            "400": ' #000000',
        }
    },
    components: {
        // Nome do componente
        MuiButtonBase: {
            defaultProps: {
                // the props to change the default for
                disableRipple: true,
            }
        }
    }
});
