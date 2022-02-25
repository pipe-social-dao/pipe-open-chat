import React from 'react'
import ReactDOM from 'react-dom'
import { APP_TITLE } from './constants'
import startup from './startup'
import '../css/index.css'


if(process.env.NODE_ENV === 'development'){
    // TODO: module local refresh from webpack HMR no effect
    (module as any).hot?.accept()
}

document.title = APP_TITLE
startup().then(()=> ReactDOM.render(<><div><h1>PIPE - pipe</h1></div></>,document.getElementById('app')))