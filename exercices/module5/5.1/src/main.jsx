import './index.css'
import AppLoader from 'components/App/AppLoader.jsx'
import ReactDOM from 'react-dom/client'

// Changement, on utilise plus App mais AppLoader qui lui même utilise App
ReactDOM.createRoot(document.getElementById('root')).render(<AppLoader />) 
