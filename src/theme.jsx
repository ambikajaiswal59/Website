import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
      primary: {
        main: "#B20000",
        light: "#FDF2E9" 
      },
      secondary: {
        main: "#0245A3", 
        light: '#F1F7FF',
      },
      
      tertiary: {
        main: "#335b86", 
      },
    },
    typography: {
      fontFamily: "'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif",
    },
  });

export default theme;  