import { createRoot } from 'react-dom/client'
import './styles/main.scss';
import App from './App.tsx'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


createRoot(document.getElementById('root')!).render(
  <>
    <App />
  </>,
)
