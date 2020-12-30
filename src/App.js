import React from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Header from "./Components/Header/Header"
import 'fontsource-roboto';

const theme = createMuiTheme({
  palette:{
    primary:{
      main:"#90caf9"
    },
    secondary:{
      main:"#f48fb1"
    }
  }
})


function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
    <Header/>
    </div>    
    </ThemeProvider>
  );
}

export default App;
