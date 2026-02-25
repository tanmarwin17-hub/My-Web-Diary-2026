import { createTheme } from "@mui/material";
import { blue, green, orange, purple, red } from "@mui/material/colors";

export const theme = createTheme({
    palette: {
        primary: {
            main: orange[500],
        },
        secondary: {
            main: green[500],
        },
        
    },
})

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: red[500],
        },
        secondary: {
            main: green[500],
        },
    },
})

