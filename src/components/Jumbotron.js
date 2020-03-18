import React from 'react';
import '../styles/Jumbotron.css';

function Jumbotron() {
  return (
    <div className="jumbotron jumbotron-fluid text-center mainJumbo">
      <div className="container">
        <h1 className="display-4 jumbomain">HELLO!</h1>
        <p className="lead jumbosup d-none d-md-block d-lg-block"><div class="typewriter"><h1>My name is Jason Martinez</h1></div><br/>I am a full-stack web developer with experience in HTML, CSS, JS, React.Js, Sass, Flux, Python, Flask, Node.Js, Bootstrap, UX/UI, MaterializeCSS, SQL, and MySQL.</p>
        <p className="lead jumbosup d-md-none d-lg-none">My name is Jason Martinez<br/> I am a full-stack web developer</p>
      </div>
    </div>
  );
}

export default Jumbotron;
