import React from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Header from "./Components/Header/Header"
import 'fontsource-roboto';

const theme = createMuiTheme({
  palette:{
    primary:{
      main:"rgb(255,255,255)"
    },
    secondary:{
      main:"rgba(224, 130, 131, 1)"
    }
  }
})


function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
    <Header/>
    <img src="/assets/story.png" alt="image"/>
    </div>    
    </ThemeProvider>
  );
}

export default App;
