import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import MainProjSection from './components/mainProjSection';
import ProjectCards from './components/projectCards';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <> 
    <Navbar />
    <Jumbotron />
    <MainProjSection />
    <ProjectCards />
    </>,
     document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
