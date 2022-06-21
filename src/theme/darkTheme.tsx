import { createTheme, experimental_sx as sx } from "@mui/material";
import Scratchy from "../assets/fonts/MS-Scratch.ttf";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    secondary: {
        main: '#000000',
    },
  },
  typography: {
    fontFamily: "Prompt",
  },
  components: {
    MuiButton: {
        styleOverrides: {
            root: sx({
                fontFamily: 'Scratchy'
            }),
        },
    },
    MuiTypography: {
        styleOverrides: {
            root: sx({
                fontFamily: 'Scratchy'
            }),
        },
    },
    MuiTextField: {
      styleOverrides: {
        root: sx({
          "& .MuiInputBase-input": {
            color: "black",
            borderColor: "black",
            fontFamily: 'Prompt'
          },
          "& label.Mui-focused": {
            color: "black",
            fontFamily: 'Prompt'
          },
          "& label": {
            color: "black",
            fontFamily: 'Prompt'
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "black",
              fontFamily: 'Prompt'
            },
            '&.Mui-focused fieldset': {
                borderColor: 'red'
            },
            "&:hover fieldset": {
                borderColor: "orange",
            },
          },
          "&:hover fieldset": {
            borderColor: "#000000",
            fontFamily: 'Prompt'
          },
          "&.Mui-focused fieldset": {
            borderColor: "black",
            fontFamily: 'Prompt'
          },
          "& .MuiInput-underline:after": {
            borderBottomColor: "black",
            fontFamily: 'Prompt'
          },
        }),
      },
    },
    MuiCssBaseline: {
      styleOverrides: `
            @font-face {
                font-family: 'Scratchy';
                font-style: normal;
                font-display: swap;
                font-weight: 400;
                src: local('Scratchy'), local('MS-Scratch'), url(${Scratchy}) format('truetype');
            }
            `,
    },
  },
});

export default darkTheme;
