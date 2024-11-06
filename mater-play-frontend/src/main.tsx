// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { StrictMode } from 'react';

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#fff"
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <ThemeProvider theme={darkTheme}>
      
      <CssBaseline/>
      
      <BrowserRouter>
        <App />
      </BrowserRouter>
    
    </ThemeProvider>
  
  </StrictMode>
)
