import axios from 'axios'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'

(() => {
    axios.defaults.baseURL = process.env.REACT_APP_API_URL
})()

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
)