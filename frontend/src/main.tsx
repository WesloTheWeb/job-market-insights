import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ReduxProvider } from './components/Wrappers/ReduxProviderWrapper.tsx';
import './index.scss'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReduxProvider>
      <App />
    </ReduxProvider>
  </StrictMode>,
)
