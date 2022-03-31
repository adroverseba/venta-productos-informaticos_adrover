import { ThemeProvider } from "@mui/material/styles";
import theme from "./temaConfig";
import Home from "./pages/Home";
// import Button from "@mui/material/Button";
// import { makeStyles } from "@mui/styles";
// import Icon from "@mui/material/Icon";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
