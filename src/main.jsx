import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// allow us connect react app with redux toolkit
import {Provider} from "react-redux"
import { store } from './state/Store.js'

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <App />
    </Provider>
)
