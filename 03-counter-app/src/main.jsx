import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './HellowWorldApp'
import { FirstApp } from "./FirstApp"
import './styles.css'
import { CounterApp } from './CounterApp'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App/>
        {/* <FirstApp title={'Hola soy leio'} subtitle={'Soy un subtitle'} /> */}
        <CounterApp value={100}/>
    </React.StrictMode>
)