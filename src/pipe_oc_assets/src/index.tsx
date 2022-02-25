import React from 'react'
import ReactDOM from 'react-dom'

if(process.env.NODE_ENV === 'development'){
    // TODO: module local refresh from webpack HMR no effect
    (module as any).hot?.accept()
}
ReactDOM.render(<><div><h1>PIPE - pipe</h1></div></>,document.getElementById('app'))