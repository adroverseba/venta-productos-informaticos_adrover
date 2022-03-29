import { createTheme } from "@mui/material/styles";
import { pink } from "@mui/material/colors";
import { blue } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: blue[800],
    },
    secondary: {
      main: pink[700],
    },
  },
});

export default theme;
