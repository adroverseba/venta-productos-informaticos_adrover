import { ThemeProvider } from "@mui/material/styles";
import theme from "./temaConfig";
// import Button from "@mui/material/Button";
// import { makeStyles } from "@mui/styles";
// import Icon from "@mui/material/Icon";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";

import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <ThemeProvider theme={theme} className="App">
      <div class="App">
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
