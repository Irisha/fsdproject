import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';
import {ThemeProvider} from '@gravity-ui/uikit';
import App from './app/App.tsx'

createRoot(document.getElementById('root')!).render(

  <ThemeProvider theme="light">
    <StrictMode>
      <App />
    </StrictMode>
  </ThemeProvider>,
)
