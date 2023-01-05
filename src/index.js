import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Maze from './components/Maze';
import Header from './components/Header'


const element =<Maze></Maze>
const element2= <Header></Header>
ReactDOM.render(element2,document.getElementById('header'))

ReactDOM.render(element,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

