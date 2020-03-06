import React from 'react';
import '../styles/Jumbotron.css';

function Jumbotron() {
  return (
    <div className="jumbotron jumbotron-fluid text-center mainJumbo">
      <div className="container">
        <h1 className="display-4 jumbomain">HELLO!</h1>
        <p className="lead jumbosup">My name is Jason Martinez<br/> I am a full-stack web developer with experience in HTML, CSS, JS, React.Js, Sass, Flux, Python, Flask, Node.Js, Bootstrap, UX/UI, MaterializeCSS, SQL, and MySQL.</p>
      </div>
    </div>
  );
}

export default Jumbotron;
